const Canvas = require('canvas')
module.exports = async (Discord, client, member) => {
	const applyText = (canvas, text) => {
		const ctx = canvas.getContext('2d');

		let fontSize = 70;

		do {
			ctx.font = `${fontSize -= 10}px sans-serif`;

		} while (ctx.measureText(text).width > canvas.width/2);

		return ctx.font;
	};
	const getPos = (canvas, text) => {
		const ctx = canvas.getContext('2d');

		return (canvas.width/2 - ctx.measureText(text).width)/2
	}

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
	ctx.fillText('WELCOME', getPos(canvas, 'WELCOME'), canvas.height - 100);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#000000.';
	ctx.fillText(`${member.displayName}!`, getPos(canvas, `${member.displayName}!`), canvas.height - 50);
	
	ctx.beginPath();
	ctx.arc(canvas.width / 4, 75, 50, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, canvas.width / 4 - 50, 25, 100, 100);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	member.guild.channels.cache.get('813679705638305813').send(`Welcome to the server, ${member}!`, attachment)

}