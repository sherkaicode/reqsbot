const Canvas = require('canvas')
module.exports = async (Discord, client, member) => {
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
    
        let fontSize = 70;
    
        do {
            ctx.font = `${fontSize -= 10}px sans-serif`;
           
        } while (ctx.measureText(text).width > canvas.width - 300);
    
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

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#000000.';
	ctx.fillText('WELCOME', canvas.width / 2.7, canvas.height / 3.5);

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

    member.guild.channels.cache.get('813679705638305813').send(`Welcome to the server, ${member}!`, attachment)

}