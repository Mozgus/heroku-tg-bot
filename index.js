const TelegramBot = require('node-telegram-bot-api')
const os = require('os')

const TOKEN = ''

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg=> {
	bot.sendMessage(msg.chat.id, `Hello from ${os.type}, bot says: Hi, "${msg.from.first_name}"`)
})
