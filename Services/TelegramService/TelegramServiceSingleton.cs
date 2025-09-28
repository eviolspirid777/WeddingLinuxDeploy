using Telegram.Bot.Types.Enums;
using Telegram.Bot.Types;
using Telegram.Bot;
using WeddingServer.Models.Requests;
using WeddingServer.DbContext;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace WeddingServer.Services.TelegramService
{
    public class TelegramServiceSingleton
    {
        private static readonly string[] ids = [
            "481227813", //Me
            "165697420" //Natasha
        ];

        private static TelegramBotClient _botClient = new("8118291036:AAE6IoXjVVDxNgf6To5ImrapAL2HG7EYuf0");

        public async Task SendFormMessage(WeddingForm data)
        {
            string msg = $"Новая заявка!\n\n{data}";
            foreach (string id in ids)
            {
                await _botClient.SendMessage(id, msg);
            }
        }
    }
}
