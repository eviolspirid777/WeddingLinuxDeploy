# Оптимизированный Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Копирование только файла проекта
COPY ["WeddingServer.csproj", "."]
RUN dotnet restore "WeddingServer.csproj"

# Копирование остальных файлов
COPY . .
RUN dotnet build "WeddingServer.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "WeddingServer.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

COPY --from=publish /app/publish .
EXPOSE 8080
ENTRYPOINT ["dotnet", "WeddingServer.dll"]