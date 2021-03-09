const Canvas = require('canvas')

module.exports = {
    name: 'canvas',
    description: "this is a ping command!",
    async execute(client, message, args, Discord) {
        const canvas = Canvas.createCanvas(700, 150);
        const ctx = canvas.getContext('2d');

        var str = args.join(' ');
        const background = await Canvas.loadImage('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/Database/BG.JPG');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.font = '60px sans-serif';

        ctx.fillStyle = '#ffffff';
        ctx.fillText(str, 0, canvas.height / 1.8);
        
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        message.channel.send(attachment);
   
    }
}