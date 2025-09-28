using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WeddingServer.Models.Database.User
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string[] Names { get; set; }
        public string? Wishes { get; set; }

        public override string ToString()
        {
            var strBuilder = new StringBuilder();
            foreach (var name in Names)
            {
                strBuilder.AppendLine($"Имя: {name}");
            }
            strBuilder.AppendLine($"Пожелание: {Wishes}");
            return strBuilder.ToString();
        }
    }
}
