const Canvas = require('canvas')
module.exports = async (Discord, client, member) => {
	//console.log(member)
	const applyText = (canvas, text) => {
		const ctx = canvas.getContext('2d');

		let fontSize = 60;

		do {
			ctx.font = `${fontSize -= 1}px "Bebas Neue"`;

		} while (ctx.measureText(text).width > canvas.width/2);

		return ctx.font;
	};
	const getPos = (canvas, text) => {
		const ctx = canvas.getContext('2d');

		return (canvas.width/2 - ctx.measureText(text).width)/2
	}
	
	let wcRole = member.guild.roles.cache.find(role => role.name === 'Member');
	member.roles.add(wcRole);
	console.log(member.role)
	Canvas.registerFont('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/Database/BN.ttf', { family: 'Bebas Neue' })
	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/Database/Wall.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px "Bebas Neue"';
	ctx.fillStyle = '#FAF5E1';
	ctx.fillText('WELCOME', getPos(canvas, 'WELCOME'), canvas.height - 100);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#FAF5E1';
	ctx.fillText(`${member.displayName}!`, getPos(canvas, `${member.displayName}!`), canvas.height - 50);
	// ctx.beginPath();
	// ctx.arc(canvas.width / 4, 75, 50, 0, Math.PI * 2, true);
	// ctx.closePath();
	// ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 15 , canvas.height/2 - 50, 100, 100);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	member.guild.channels.cache.get('813679705638305813').send(`Welcome to the server, ${member}!`, attachment)
}