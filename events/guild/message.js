const { includes } = require("ffmpeg-static");
const count = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/countto.js')
const countv = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/counts.js')

module.exports = (Discord, client, message) => {


    const prefix = process.env.PREFIX;
    if (message) {

        if (message.channel == '817272342307930142' && !message.author.bot) {
            count(client);
        }
        if (message.channel == '824294522757447700' && !message.author.bot) {
            countv(client);
        }
        if (message.content.toLocaleLowerCase() == 'thanks hori') {
            message.channel.send("Sure, No worries")
        }
        if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

        if (message.mentions.has(client.user.id)) {

            message.channel.send("Hello there!");
            m = `The Prefix of this Bot is [**${prefix}**]` + '\n' 
            + 'Type **,cmd** for the list of the commands and brief description'
            message.channel.send(m)
        };
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLocaleLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) command.execute(client, message, args, Discord);

}