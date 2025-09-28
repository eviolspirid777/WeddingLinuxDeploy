
using Microsoft.EntityFrameworkCore;
using WeddingServer.Models.Database.User;

namespace WeddingServer.DbContext
{
    public class PostgreDBContext: Microsoft.EntityFrameworkCore.DbContext
    {
        public PostgreDBContext(DbContextOptions options): base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<User> Users { get; set; } = null!;
    }
}
