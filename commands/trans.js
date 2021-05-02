const translate = require('translate')
translate.engine = "libre";

module.exports = {
    name: 'trans',
    description: "Translate Japanese EX. [prefix]trans (word)",
    cooldown: 5,
    execute(client, message, args, Discord) {
        const trans = args[0];
        translate(trans, { from: "ja", to: "en" }).then(text => {
            console.log(text);
            message.reply(`The translation is: `+ "\n" + '```' + text + '```') 
        });
    }
}