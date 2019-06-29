const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping'){
   //{message.reply('fuck you fatty');
   message.channel.sendMessage('pong');
    }

});


bot.login('NTk0NDg3MDE3MzkyNTcwMzkw.XRdJmw.TjknPosOav7L7E2JfcRnE3hs1Ac');