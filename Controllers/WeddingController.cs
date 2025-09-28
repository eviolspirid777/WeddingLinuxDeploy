using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeddingServer.DbContext;
using WeddingServer.Models.Database.User;
using WeddingServer.Models.Requests;
using WeddingServer.Services.TelegramService;

namespace WeddingServer.Controllers
{

    [ApiController]
    [Route("v1/api/[controller]")]
    public class WeddingController(TelegramServiceSingleton telegramServiceSingleton, IDbContextFactory<PostgreDBContext> dbContextFactory) : ControllerBase
    {
        private readonly TelegramServiceSingleton _telegramServiceSingleton = telegramServiceSingleton;
        private readonly IDbContextFactory<PostgreDBContext> _dbContextFactory = dbContextFactory;

        [HttpPost("post-wedding-form")]
        public async Task<IActionResult> SendTelegramForm([FromBody] WeddingForm data)
        {
            var ctx = await _dbContextFactory.CreateDbContextAsync();
            await _telegramServiceSingleton.SendFormMessage(data);
            await ctx
                    .Users
                    .AddAsync(new User {
                        Names = data.Names,
                        Wishes = data.Wishes 
                    });
            await ctx.SaveChangesAsync();
            return Ok();
        }
    }
}
