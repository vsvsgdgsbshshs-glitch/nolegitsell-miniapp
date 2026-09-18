// Optional Telegram bot launcher. Node.js 20+.
// Set BOT_TOKEN in your environment and run: node bot.js
const https = require('https');
const token = process.env.BOT_TOKEN;
const webAppUrl = process.env.WEB_APP_URL || 'https://YOUR-GITHUB-PAGES-URL/';

if (!token) {
  console.error('Не задан BOT_TOKEN. Получите токен у @BotFather и задайте переменную окружения BOT_TOKEN.');
  process.exit(1);
}

function api(method, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${token}/${method}`,
      method: 'POST',
      headers: {'Content-Type':'application/json','Content-Length':Buffer.byteLength(data)}
    }, res => {
      let out=''; res.on('data', c => out += c); res.on('end', () => resolve(JSON.parse(out)));
    });
    req.on('error', reject); req.write(data); req.end();
  });
}

let offset = 0;
async function loop(){
  const r = await api('getUpdates', {offset, timeout: 30, allowed_updates:['message']});
  for (const u of (r.result || [])) {
    offset = u.update_id + 1;
    const chat = u.message?.chat;
    if (!chat) continue;
    const keyboard = {inline_keyboard:[[{text:'Открыть noLegitSell', web_app:{url:webAppUrl}}]]};
    await api('sendMessage', {chat_id:chat.id, text:'Добро пожаловать в noLegitSell 👋\nОткрой мини-приложение, чтобы посмотреть способы заказа и отзывы.', reply_markup:keyboard});
  }
}

(async()=>{ console.log('noLegitSell bot started'); while(true){ try{ await loop(); } catch(e){ console.error(e.message); await new Promise(r=>setTimeout(r,3000)); } } })();
