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
	const emoji = client.emojis.cache.get("817355708374056980")


	let wcRole = member.guild.roles.cache.find(role => role.name === 'Member');
	member.roles.add(wcRole);
	Canvas.registerFont('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/Database/BN.ttf', { family: 'Compose Black' })
	Canvas.registerFont('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/Database/JP.ttf', { family: 'JP' })
	const canvas = Canvas.createCanvas(1024, 500);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/Database/Wall.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#ff6961';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = `85px JP`;  
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`花`,canvas.width/4 - getwidth(canvas,'花') -50, 90);
	ctx.fillText(`丸`,canvas.width/4 - getwidth(canvas,'丸') -50, 180);
	ctx.fillText(`へ`,canvas.width/4 - getwidth(canvas,'へ') -50, 270);
	ctx.fillText(`！`,canvas.width/4 - getwidth(canvas,'！') -50, 360);
	ctx.fillText(`よ`,canvas.width*3/4 - getwidth(canvas,'よ') +50 , 90);
	ctx.fillText(`う`,canvas.width*3/4 - getwidth(canvas,'う') +50 , 180);
	ctx.fillText(`こ`,canvas.width*3/4 - getwidth(canvas,'こ') +50, 270);
	ctx.fillText(`そ`,canvas.width*3/4 - getwidth(canvas,'そ') +50 , 360);
	ctx.strokeStyle = '#000000';
	ctx.lineWidth = 5;
	ctx.strokeText(`花`,canvas.width/4 - getwidth(canvas,'花') -50, 90);
	ctx.strokeText(`丸`,canvas.width/4 - getwidth(canvas,'丸') -50, 180);
	ctx.strokeText(`へ`,canvas.width/4 - getwidth(canvas,'へ') -50, 270);
	ctx.strokeText(`！`,canvas.width/4 - getwidth(canvas,'！') -50, 360);
	ctx.strokeText(`よ`,canvas.width*3/4 - getwidth(canvas,'よ') +50 , 90);
	ctx.strokeText(`う`,canvas.width*3/4 - getwidth(canvas,'う') +50 , 180);
	ctx.strokeText(`こ`,canvas.width*3/4 - getwidth(canvas,'こ') +50, 270);
	ctx.strokeText(`そ`,canvas.width*3/4 - getwidth(canvas,'そ') +50 , 360);






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