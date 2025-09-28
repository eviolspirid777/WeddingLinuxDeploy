# Многоэтапная сборка для React приложения
FROM node:18-alpine AS builder

# Установка рабочей директории
WORKDIR /app

# Копирование файлов зависимостей
COPY package*.json ./

# Установка всех зависимостей (включая dev для сборки)
RUN npm install

# Копирование исходного кода
COPY . .

# Сборка приложения
RUN npm run build

# Продакшн образ с nginx
FROM nginx:alpine

# Копирование собранного приложения
COPY --from=builder /app/dist /usr/share/nginx/html

# Копирование конфигурации nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Открытие порта 80
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]
