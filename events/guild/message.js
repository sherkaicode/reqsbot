const { includes } = require("ffmpeg-static");
const count = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/countto.js')

module.exports = (Discord, client, message) => {
    
    
    const prefix =  process.env.PREFIX+" ";
    if (message) {
        if (message.channel == '817272342307930142'&& !message.author.bot) {
            count(client);
        }
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLocaleLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    
    if(command) command.execute(client, message, args, Discord);
    
}