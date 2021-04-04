const Canvas = require('canvas')

module.exports = {
    name: 'canvas',
    description: "This turns text to Images ex: ,canvas [words]",
    async execute(client, message, args, Discord) {
        const getcanvasX = (canvas, txt, font) => {
            const ctx = canvas.getContext('2d');
            ctx.font = `${font}px sans-serif`
            return ctx.measureText(txt).width +20;
        }
        
        const getcanvasY = (canvas, txt, font) => {
            const ctx = canvas.getContext('2d');
            ctx.font = `${font}px sans-serif`
            lineheight = ctx.measureText('M').width + font/2
            return lineheight+5;
        }
        font  = 100;
        str = args.slice(0, args.length).join(' ')

        const canvas1 = Canvas.createCanvas(100, 100)
        const canvas = Canvas.createCanvas(getcanvasX(canvas1, str, font),getcanvasY(canvas1, str, font))
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('Database/BG.JPG');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#2c2f33';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${font}px sans-serif`;  
        

        ctx.fillStyle = '#ffffff';
        ctx.fillText(str, 0, canvas.height/1.8 + 20);
        
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        message.channel.send(attachment);
   
    }
}