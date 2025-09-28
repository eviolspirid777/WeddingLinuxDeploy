# Docker для Wedding Client

Этот проект настроен для работы с Docker и включает в себя все необходимые файлы для контейнеризации React приложения.

## Файлы Docker

- `Dockerfile` - основной файл для сборки образа
- `nginx.conf` - конфигурация nginx для SPA
- `.dockerignore` - исключения для сборки

## Сборка и запуск

### С помощью Docker Compose (рекомендуется)

**В корне проекта (WeddingServer):**

```bash
# Сборка и запуск всех сервисов
docker-compose up --build

# Запуск в фоновом режиме
docker-compose up -d --build

# Остановка
docker-compose down
```

### С помощью Docker напрямую

```bash
# Сборка образа
docker build -t wedding-client .

# Запуск контейнера
docker run -p 3000:80 wedding-client
```

## Доступ к приложению

После запуска приложение будет доступно по адресу: http://localhost:3000

## Особенности конфигурации

- **Многоэтапная сборка**: Использует Node.js для сборки и nginx для продакшена
- **Оптимизация**: Gzip сжатие, кеширование статических файлов
- **SPA поддержка**: Настроен для работы с React Router
- **Безопасность**: Исключены системные файлы из доступа

## Переменные окружения

При необходимости можно добавить переменные окружения в `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - API_URL=http://your-api-url
```
