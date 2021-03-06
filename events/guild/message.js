module.exports = (Discord, client, message) => {
    const prefix =  process.env.PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLocaleLowerCase();

    const command = client.commands.get(cmd);
    
    if(command) command.execute(client, message, args, Discord);
    
}