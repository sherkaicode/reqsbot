const memberCounter = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/counterM.js')
const reactRole = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/react.js')
const count = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/countto.js')

module.exports = (Discord, client) => {

    console.log("Ready")
    memberCounter(client);
    reactRole(client, Discord)
    client.user.setActivity("Mention me for help"); 

}