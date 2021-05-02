module.exports = {
    name: 'clear',
    description: "Clears messeges EX. [prefix]clear (how many messages to delete)",
    async execute(client, message, args, Discord) {
        if (message.member.roles.cache.some(role => role.name === 'Consultant') || message.member.roles.cache.some(role => role.name === 'Creator')) {
            if (!args[0]) return message.reply("Input num");
            if (isNaN(args[0])) return message.reply("Input number");

            if (args[0] > 100) return message.reply("Input less than 100");
            if (args[0] < 1) return message.reply("Atleast 1");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            })
        }
        else {
            message.channel.send("You don't have power to do this")
        }

    }
}
