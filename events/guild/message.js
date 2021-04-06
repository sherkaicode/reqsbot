const { includes } = require("ffmpeg-static");
const countv = require('../../counters/counts')

module.exports = (Discord, client, message) => {


    const prefix = ',';
    if (message) {


        if (message.channel == '817272342307930142' && !message.author.bot) {
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

    try {
        command.execute(client, message, args, Discord);
    } catch (err) {
        message.reply("Error doing the command");
        console.log(err);
    }

}