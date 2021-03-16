const memberCounter = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/counterM.js')
const reactRole = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/react.js')
const time = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/time.js')


module.exports = (Discord, client) => {

    console.log("Ready")
    memberCounter(client);
    reactRole(client, Discord)
    time(client)
    client.user.setActivity("Mention me for help 😉"); 
    // client.user.setActivity("Under Maintenance"); 

}