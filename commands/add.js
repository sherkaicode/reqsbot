module.exports = {
    name: 'add',
    description: "this is a ping command!",
    execute(message, args, client, fs) {


        client.reqs[args[0]] = {
            description: args[1],
            date: args[2]
        }
        fs.writeFile("./Database/reqs.json", JSON.stringify(client.reqs, null, 2), err => {
            if (err) throw err;
        })
        message.reply('Logged');

    }
}