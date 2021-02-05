module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, client, fs) {
        
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        
    }
}