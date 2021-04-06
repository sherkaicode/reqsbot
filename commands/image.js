var Scraper = require('images-scraper');


module.exports = {
    name: 'image',
    aliases: ['im'],
    description: "This send an image from google ex: ,image [query] | ,im [query]",
    cooldown: 15,
    async execute(client, message, args) {
        const google = new Scraper({
            puppeteer: {
                headless: true,
                args: ['--no-sandbox']
            },
        });
        const image_query = args.join(' ');
        if (!image_query) return message.channel.send("Please set an image name")
        message.channel.send("Please wait for a little while")


        const image_results = await google.scrape(image_query, 1);
        message.reply(image_query)
        message.channel.send(image_results[0].url)
        //     console.log('results', results);

    }
}
