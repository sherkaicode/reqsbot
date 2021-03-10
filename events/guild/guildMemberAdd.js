const Canvas = require('canvas')
module.exports = async (Discord, client, member) => {
    // let wcRole = member.guild.roles.cache.find(role => role.name === 'Member');

    // member.roles.add(wcRole);
    // let embed = new Discord.MessageEmbed()
    //     .setColor('#e42643')
    //     .setDescription(`**Welcome** <@${member.user.id}>`)
    //     .addFields(
    //         { name: 'Get Roles Here', value: '<#814420531599638529>' }
    //     )
    //     .setImage('https://media.tenor.com/images/5b6e236260445894227e4bba729048e0/tenor.gif')


    // member.guild.channels.cache.get('813679705638305813').send(embed)
    //client.commands.get('react').execute(member, Discord, client);
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
    
        // Declare a base size of the font
        let fontSize = 70;
    
        do {
            // Assign the font to the context and decrement it so it can be measured again
            ctx.font = `${fontSize -= 10}px sans-serif`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (ctx.measureText(text).width > canvas.width - 300);
    
        // Return the result to use in the actual canvas
        return ctx.font;
    };
    
    const channel = member.guild.channels.cache.find(ch => ch.name === '📔│log');
	if (!channel) return;

    let wcRole = member.guild.roles.cache.find(role => role.name === 'Member');
    member.roles.add(wcRole);
	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/Database/Wall.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#000000.';
	ctx.fillText('WELCOME', canvas.width / 2.7, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#000000.';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.8, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	//channel.send(`Welcome to the server, ${member}!`, attachment);
    member.guild.channels.cache.get('813679705638305813').send(`Welcome to the server, ${member}!`, attachment)

}