const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { query } = require('express');

module.exports = {
    name: 'play',
    description: 'Joins and plays vid',
    aliases: ['p', 'pl'], 
    async execute(client, message, args, Discord) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You must be in a voice channel to command');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have a permisson to connect');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have a permisson to Speak');
        if(!args.length) return message.channel.send('You have to send a message');

        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        if (validURL(args[0])){
            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});

            connection.play(stream, {seek: 0, volume:1})
            .on('finish', ()=>{
                voiceChannel.leave()
                message.channel.send(`Leaving Channel :x:`);
            })
            await message.reply(`:thumbsup: Now playing ***Your Link ${args[0]}***`)

            return
        }

        const connection = await voiceChannel.join();

        const videoFinder = async(query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1)? videoResult.videos[0]: null;

        }
        const video = await videoFinder(args.join(' '));

        if (video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume:1})
            .on('finish', () => {
                voiceChannel.leave();
            })
            await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
        } else {
            message.channel.send('No video results found');
        }
        
    } 
}