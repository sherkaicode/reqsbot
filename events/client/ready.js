const memberCounter = require('../../counters/counterM')
const time = require('../../counters/time')
const Etime = require('../../counters/Etime')


module.exports = (Discord, client) => {

    console.log("Ready")
    memberCounter(client);
    time(client)
    Etime(client);
    //client.user.setActivity("Under Maintenance"); 

    client.user.setActivity("🤙me for help 😉", { type: "LISTENING"})

}