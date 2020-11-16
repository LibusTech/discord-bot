const Discord = require('discord.js')
const client = new Discord.Client();
const PREFIX = '/';



client.on('ready', () => {
    console.log('The bot is on! I am ready to be used')

    client.user.setActivity('Aarush doing stuff', {type: 'WATCHING'}).catch(console.error);
})

client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){

        case 'invite':
            message.channel.send('https://discord.gg/QgUFtU6E')
        break;    

        case 'botinfo':
            message.channel.send('Name of Bot: Aarush sucks')
            message.channel.send('Bot Description: legit trash')
            message.channel.send('What I like:Stuff')
        break;

        case 'gitversion':
            message.channel.send('1.51.1')
        break;

        case 'yt':
            message.channel.send('naenae')
        break;

        case 'help':
            message.channel.send('HELP COMMANDS:')
            message.channel.send('Prefix is !')
            message.channel.send('help - Shows this help command')
            message.channel.send('invite - Invites user to discord server')
            message.channel.send('botinfo - A little bit of bot info')
            message.channel.send('gitversion - bot version')
            message.channel.send('mc - A random minecraft vid i made lol')
            message.channel.send('yt - naenae')
        break;

        case 'mc':
            message.channel.send('https://www.youtube.com/watch?v=hFBRFgnNBi0')
        break;
        
    }

})

client.login("Nzc3NjI1OTk1NTczNTkyMTA0.X7GKpA.c4okQ5oP1vaKZqqwGLENKKAehzE")