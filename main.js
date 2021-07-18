const Discord = require('discord.js');
require('dotenv').config();
var client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)

})


client.login(process.env.TOKEN);