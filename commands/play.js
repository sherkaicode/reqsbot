const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop', 'q','leave'],
    cooldown: 0,
    description: 'Advanced music bot',
    async execute(client, message, args, Discord, cmd) {
        const Roka = client.emojis.cache.get("829305452603899904")

        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');


        const server_queue = queue.get(message.guild.id);

        if (cmd == 'q') {
            var m = ''
            for (var c = 0; c < server_queue.songs.length; c = c + 1) {
                m = m + `[${c + 1}] ${server_queue.songs[c].title}` + '\n';
            }
            message.channel.send('```'+m+'```');
        }
        if (cmd === 'play') {
            if (!args.length) return message.channel.send('You need to send the second argument!');
            let song = {};

            if (ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
            } else {

                const video_finder = async (query) => {
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if (video) {
                    song = { title: video.title, url: video.url }
                } else {
                    message.channel.send('Error finding video.');
                }
            }


            if (!server_queue) {

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }


                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);


                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0], client);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                }
            } else {
                server_queue.songs.push(song);
                return message.channel.send(`${Roka} **${song.title}** added to queue!`);
            }
        }

        else if (cmd === 'skip') skip_song(message, server_queue, client);
        else if (cmd === 'stop' || cmd === 'leave') stop_song(message, server_queue);
    }

}

const video_player = async (guild, song, client) => {
    const chopper = client.emojis.cache.get('830253377740734464')
    const song_queue = queue.get(guild.id);


    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
        .on('finish', () => {
            song_queue.songs.shift();
            video_player(guild, song_queue.songs[0], client);
        });
    await song_queue.text_channel.send(`${chopper} Now playing **${song.title}**`)
}

const skip_song = (message, server_queue, client) => {
    const brook = client.emojis.cache.get('829310277194743829')
    if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
    if (server_queue.songs.length <= 1) {
        return message.channel.send(`There are no songs in queue ${brook}`);
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
    message.react('829307972832329749');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();

}