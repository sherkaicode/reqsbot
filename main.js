const Discord = require('discord.js');

var client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = 'r!x ';

const fs = require('fs');

client.reqs = require("./Database/reqs.json");


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('online!');
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();
    console.log(command)
    if (command == 'ping') {
        client.commands.get('ping').execute(message, args, client, fs);
    }
    else if (command == 'add') {
        client.commands.get('add').execute(message, args, client, fs);
    }
    else if (command == 'show') {
        client.commands.get('show').execute(message, args, client, fs);
    }
    else if (command == 'remove') {
        client.commands.get('remove').execute(message, args, client, fs);
    }
    


});





client.login('ODAzNTQzMDM1MjY2NTk2ODk1.YA_TxA.ihHEHzMUTHttrw_2jsm0yLL_SN8');