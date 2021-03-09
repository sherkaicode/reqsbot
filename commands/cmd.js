const { count } = require('console')
const fs = require('fs')
module.exports = {
    name: 'cmd',
    description: "send cmd",
    execute(client, message, args, Discord){
        const commandFiles = fs.readdirSync('./commands/')

        m = '';
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            
            m = m + '__**Command Affix**__' + `${'```'}${command.name}${'```'}`+ '\n' + '> **Description:** ' + ` *${command.description}*`  + '\n\n' ;  
            //client.commands.set(command.name, command);
        
            //console.log(command.aliases)
            //console.log(v)
        }
       
        message.channel.send(m)
        message.channel.send('**Example** =>' + '\n' + '``` ,Command Affix ```')
    }
}