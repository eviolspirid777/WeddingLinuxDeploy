using Microsoft.Extensions.Hosting;
using Telegram.Bot;
using Telegram.Bot.Types;
using Telegram.Bot.Types.Enums;
using WeddingServer.DbContext;
using Microsoft.EntityFrameworkCore;
using System.Text;
using WeddingServer.Models.Database.User;

namespace WeddingServer.Services.TelegramService
{
    public enum ReceiverEnum
    {
        DEVELOPMENT = 0,
        PRODUCTION = 1
    }
    public class TelegramService : IHostedService
    {
        private const int MAX_MESSAGE_LENGTH = 4096; // Ограничение Telegram Bot API
        
        private static readonly string[] ids = [
            "481227813", //Me
            "165697420" //Natasha
        ];

        private static TelegramBotClient _botClient = new("8118291036:AAE6IoXjVVDxNgf6To5ImrapAL2HG7EYuf0");
        private readonly IDbContextFactory<PostgreDBContext> _dbContextFactory;
        public TelegramService(IDbContextFactory<PostgreDBContext> dbContextFactory)
        {
            _dbContextFactory = dbContextFactory;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _botClient.OnMessage += SendMessage;
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _botClient.OnMessage -= SendMessage;
            return Task.CompletedTask;
        }

        /// <summary>
        /// Разбивает длинное сообщение на части, не превышающие лимит Telegram
        /// </summary>
        /// <param name="message">Исходное сообщение</param>
        /// <returns>Список частей сообщения</returns>
        private List<string> SplitMessage(string message)
        {
            var parts = new List<string>();
            
            if (message.Length <= MAX_MESSAGE_LENGTH)
            {
                parts.Add(message);
                return parts;
            }

            var lines = message.Split('\n');
            var currentPart = new StringBuilder();
            
            foreach (var line in lines)
            {
                // Если одна строка уже превышает лимит, разбиваем её по словам
                if (line.Length > MAX_MESSAGE_LENGTH)
                {
                    // Сначала добавляем текущую часть, если она не пустая
                    if (currentPart.Length > 0)
                    {
                        parts.Add(currentPart.ToString());
                        currentPart.Clear();
                    }
                    
                    // Разбиваем длинную строку по словам
                    var words = line.Split(' ');
                    foreach (var word in words)
                    {
                        if (currentPart.Length + word.Length + 1 > MAX_MESSAGE_LENGTH)
                        {
                            if (currentPart.Length > 0)
                            {
                                parts.Add(currentPart.ToString());
                                currentPart.Clear();
                            }
                            
                            // Если одно слово превышает лимит, разбиваем его принудительно
                            if (word.Length > MAX_MESSAGE_LENGTH)
                            {
                                for (int i = 0; i < word.Length; i += MAX_MESSAGE_LENGTH)
                                {
                                    var chunk = word.Substring(i, Math.Min(MAX_MESSAGE_LENGTH, word.Length - i));
                                    parts.Add(chunk);
                                }
                            }
                            else
                            {
                                currentPart.Append(word);
                            }
                        }
                        else
                        {
                            if (currentPart.Length > 0)
                                currentPart.Append(' ');
                            currentPart.Append(word);
                        }
                    }
                }
                else
                {
                    // Проверяем, поместится ли строка в текущую часть
                    if (currentPart.Length + line.Length + 1 > MAX_MESSAGE_LENGTH)
                    {
                        if (currentPart.Length > 0)
                        {
                            parts.Add(currentPart.ToString());
                            currentPart.Clear();
                        }
                    }
                    
                    if (currentPart.Length > 0)
                        currentPart.Append('\n');
                    currentPart.Append(line);
                }
            }
            
            // Добавляем последнюю часть, если она не пустая
            if (currentPart.Length > 0)
            {
                parts.Add(currentPart.ToString());
            }
            
            return parts;
        }

        public async Task SendMessage(Message msg, UpdateType type)
        {
            if(msg.Text.Contains("/list"))
            {
                using var db = _dbContextFactory.CreateDbContext();
                var users = await db.Users.ToListAsync();
                var stringBuilder = new StringBuilder();
                foreach (var user in users)
                {
                    stringBuilder.Append($"{user.Id}-{user}\n\n");
                }
                
                var fullMessage = $"Список:\n\n{stringBuilder}";
                var messageParts = SplitMessage(fullMessage);
                
                // Отправляем каждую часть сообщения
                foreach (var part in messageParts)
                {
                    await _botClient.SendMessage(msg.Chat, part);
                }
            }
        }

        public async Task SendFormMessage(string msg)
        {
            foreach (var id in ids)
            {
                await _botClient.SendMessage(id, msg);
            }
        }
    }
}
