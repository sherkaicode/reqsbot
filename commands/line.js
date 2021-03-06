const fs = require('fs')
module.exports = {
    name: 'line',
    description: "this is a ping command!",
    execute(client, message, args, Discord) {

        var sub = args[0]

        var m = client.reqs[sub].date;

        var month = m.substring(0, 2)
        var day = m.substring(3,5)
        var year = m.substring(6, 8)

        var dateObj = new Date();
        var cmonth = dateObj.getUTCMonth()+1;
        var cday = dateObj.getUTCDate();
        var cyear = dateObj.getUTCFullYear().toString().substring(2, 4);
        
        var rmonth = month - cmonth;
        var rday = day - cday;
        var ryear = year- cyear;

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('TIME LEFT')

            .addFields(
                { name: 'Day/s Left', value: rday },
                { name: 'Month/s Left', value: rmonth },
                { name: 'Year/s Left', value: ryear },
            )

        message.reply(embed);
    }
}