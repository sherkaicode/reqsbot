const Canvas = require('canvas')
module.exports = async (Discord, client, member) => {
	//console.log(member)
	const applyText = (canvas, text) => {
		const ctx = canvas.getContext('2d');

		let fontSize = 100;

		do {
			ctx.font = `${fontSize -= 1}px "Compose Black"`;

		} while (ctx.measureText(text).width > canvas.width);

		return ctx.font;
	};
	const getPos = (canvas, text) => {
		const ctx = canvas.getContext('2d');

		return (canvas.width - ctx.measureText(text).width) / 2
	}
	const getwidth = (canvas, text) => {
		const ctx = canvas.getContext('2d');

		return ctx.measureText(text).width/2
	}
	const emoji = client.emojis.cache.get("829305452603899904")


	let wcRole = member.guild.roles.cache.find(role => role.name === 'Member');
	member.roles.add(wcRole);
	Canvas.registerFont('Database/BN.ttf', { family: 'Compose Black' })
	const canvas = Canvas.createCanvas(1024, 500);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('Database/Wall2.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = '#ff6961';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}`, getPos(canvas, `${member.displayName}`), canvas.height - 40);
	ctx.strokeStyle = '#000000';
	ctx.lineWidth = 5;
	ctx.strokeText(`${member.displayName}`, getPos(canvas, `${member.displayName}`), canvas.height - 40);

	ctx.beginPath();
	ctx.arc(513, 175, 122, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 388, 50, 250, 250);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	member.guild.channels.cache.get('813679705638305813').send(`Welcome to **Hanamaru** ${member}! ${emoji}`+"\n"+
	`Please visit ${member.guild.channels.cache.get('814420531599638529').toString()} to get a role.`, attachment)
}