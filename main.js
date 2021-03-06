const Discord = require('discord.js');
var client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });


// const sched = require('./counters/sendSched');
// const Timer = new Map()
// client.reqs = require("./Database/reqs.json");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)

})



// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
//     const command = require(`./commands/${file}`);
//     client.commands.set(command.name, command);
// }

// client.once('ready', ()=> {
//     console.log("Ready")   
//     memberCounter(client);
//     serverTime(client);
//     reactRole(client, Discord)
//     // sched(client, Discord);
// });
// client.on('guildMemberAdd', member => {
//     let wcRole = member.guild.roles.cache.find(role => role.name === 'Member');

//     member.roles.add(wcRole);
//     let embed = new Discord.MessageEmbed()
//         .setColor('#e42643')
//         .setDescription(`**Welcome** <@${member.user.id}>`)
//         .addFields(
//             { name: 'Get Roles Here', value: '<#814420531599638529>' }
//         )
//         .setImage('https://media.tenor.com/images/5b6e236260445894227e4bba729048e0/tenor.gif')


//     member.guild.channels.cache.get('813679705638305813').send(embed)
//     //client.commands.get('react').execute(member, Discord, client);

    
// });


// client.on('message', message => {

//     if (!message.content.startsWith(prefix) || message.author.bot) return;
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLocaleLowerCase();

    
//     if (command === 'ping') {
//         client.commands.get('ping').execute(message, args, client, fs);
//     }
//     else if (command === 'clear') {
//         client.commands.get('clear').execute(message, args);
//     }  
//     else if (command === 'kick') {
//         client.commands.get('kick').execute(message, args);
//     }
//     else if (command === 'ban') {
//         client.commands.get('ban').execute(message, args);
//     }
//     else if (command === 'mute') {
//         client.commands.get('mute').execute(message, args);
//     }
//     else if (command === 'unmute') {
//         client.commands.get('unmute').execute(message, args);
//     }
//     else if (command === 'play') {
//         client.commands.get('play').execute(message, args);
//     }
//     else if (command === 'leave') {
//         client.commands.get('leave').execute(message, args);
//     }
//     // else if (command === 'react') {
//     //     client.commands.get('react').execute(message, Discord, client);
//     // }
    
    

//     // else if (command == 'add') {
//     //     client.commands.get('add').execute(message, args, client, fs);
//     // }
//     // else if (command == 'show') {
//     //     client.commands.get('show').execute(message, args, client, fs);
//     // }
//     // else if (command == 'remove') {
//     //     client.commands.get('remove').execute(message, args, client, fs);
//     // }
//     // else if (command == 'line') {
//     //     client.commands.get('line').execute(message, args, client, fs, Discord);
//     // }

// });







//client.login('ODAzNTQzMDM1MjY2NTk2ODk1.YA_TxA.ihHEHzMUTHttrw_2jsm0yLL_SN8');
client.login('Nzk1MTYxNjYwMDUwNTA1ODAw.X_FWAQ._DyPqieWVNlSFwnY-NSRrAXCRRY');