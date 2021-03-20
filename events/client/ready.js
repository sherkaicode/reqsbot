const memberCounter = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/counterM.js')
const time = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/time.js')
const Etime = require('C:/Users/fljum/OneDrive/Desktop/Aegis/JSscript/Reqbot/counters/Etime.js')


module.exports = (Discord, client) => {

    console.log("Ready")
    memberCounter(client);
    time(client)
    Etime(client);
    //client.user.setActivity("Mention me for help 😉"); 
    //client.user.setActivity("Under Maintenance"); 
    client.user.setActivity("🤙me for help 😉", { type: "LISTENING"})

}