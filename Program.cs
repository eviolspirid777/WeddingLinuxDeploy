using Microsoft.EntityFrameworkCore;
using WeddingServer.DbContext;
using WeddingServer.Services.TelegramService;
//AUTHORIZE ON SERVER
//login: root
//pass: jzgQWZF62ZmCT446

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContextFactory<PostgreDBContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") 
        ?? "Server=localhost;Database=wedding;Port=5432;UserId=postgres;Password=94monizi;";
    options.UseNpgsql(connectionString);
});
builder.Services.AddHostedService<TelegramService>();
builder.Services.AddScoped<TelegramServiceSingleton>();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowSpecificOrigin");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Отключаем HTTPS редирект в контейнере
if (!app.Environment.IsEnvironment("Docker"))
{
    app.UseHttpsRedirection();
}

app.MapControllers();

app.Run();
