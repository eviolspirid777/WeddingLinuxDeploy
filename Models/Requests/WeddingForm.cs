using System.Text;

namespace WeddingServer.Models.Requests
{
    public class WeddingForm
    {
        public string[] Names { get; set; }
        public string? Wishes { get; set; }

        public override string ToString()
        {
            var strBuilder = new StringBuilder();
            foreach(var name in Names)
            {
                strBuilder.AppendLine($"Имя: {name}");
            }
            strBuilder.AppendLine($"Пожелание: {Wishes}");
            return strBuilder.ToString();
        }
    }
}
