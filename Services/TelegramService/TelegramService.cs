using Microsoft.Extensions.Hosting;
using Telegram.Bot;
using Telegram.Bot.Types;
using Telegram.Bot.Types.Enums;
using WeddingServer.DbContext;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace WeddingServer.Services.TelegramService
{
    public enum ReceiverEnum
    {
        DEVELOPMENT = 0,
        PRODUCTION = 1
    }
    public class TelegramService : IHostedService
    {
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
                await _botClient.SendMessage(msg.Chat, $"Список:\n\n{stringBuilder}");
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
