module.exports = {
    name: 'leave',
    description: 'Bot leaves the voice channel',
    async execute(client, message, args, Discord) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You need to be in a voice channel');
        await voiceChannel.leave();
        await message.channel.send(`Leaving channel ❌`)
    }
}