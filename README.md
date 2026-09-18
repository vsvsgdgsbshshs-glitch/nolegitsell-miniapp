# noLegitSell — Telegram Mini App

Готовый мобильный фронтенд в стиле макета + простой Telegram-бот, который отправляет кнопку для открытия Mini App.

## Что уже работает
- «Способы заказа» → Avito-магазин.
- «Отзывы» → страница отзывов Avito.
- Telegram в «Наши соц.сети» → `https://t.me/nolegitsell`.
- ☰ → «Обратиться за помощью в поддержку» → `https://t.me/DTPMN`.
- Плавные нажатия и открытие меню.
- Медленная лёгкая анимация одежды.
- Изображение макета лежит в `assets/hero.png`.
- VK и Instagram отображаются, но ссылки не выдуманы: добавь реальные адреса в `index.html`, когда они будут.

## Размещение Mini App
Статическую папку можно разместить на GitHub Pages или другом HTTPS-хостинге. Telegram Web Apps требуют HTTPS URL.

После публикации получишь адрес вроде:
`https://USERNAME.github.io/REPOSITORY/`

Этот URL укажи в `WEB_APP_URL` для `bot.js` и используй при настройке кнопки Web App у бота.

## Запуск бота
1. Создай бота через @BotFather и получи BOT_TOKEN.
2. Установи Node.js 20+.
3. В папке проекта:
   - `BOT_TOKEN="твой_токен" WEB_APP_URL="https://твой-домен/" node bot.js`
4. Бот работает через long polling, отдельный сервер для webhook не нужен.

Не публикуй BOT_TOKEN в GitHub.
