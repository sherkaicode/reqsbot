const { includes } = require("ffmpeg-static");
const countv = require('../../counters/counts')
const cooldowns = new Map();

module.exports = (Discord, client, message) => {
    const prefix = '=';

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
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }
        const current_time = Date.now()
        const time_stamps = cooldowns.get(command.name);
        const cooldown_amount = (command.cooldown) * 1000;
        if (time_stamps.has(message.author.id)) {
            const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;
            if (current_time < expiration_time) {
                const time_left = (expiration_time - current_time) / 1000;
                return message.reply(`Please wait for ${time_left.toFixed(1)} seconds before using ${command.name}`)
            }
        }
        time_stamps.set(message.author.id, current_time);
        setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
    }
    catch (err) {
        message.channel.send('No command found')
    }



    try {
        command.execute(client, message, args, Discord, cmd);
    } catch (err) {
        message.reply("Error doing the command");
        console.log(err);
    }

}