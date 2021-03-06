const memberCounter = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/counterM.js')
const serverTime = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/time.js')
const reactRole = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/react.js')
module.exports = (Discord, client) => {

    console.log("Ready")
    memberCounter(client);
    serverTime(client);
    reactRole(client, Discord)

}