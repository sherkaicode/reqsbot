module.exports = async (client) => {
    const guild = client.guilds.cache.get('790447283921616916');
    const channelTime = guild.channels.cache.get('815081738459545601');
    const channelDate = guild.channels.cache.get('818402690936602635');
    const channelName = guild.channels.cache.get('818403206752370729');
    setInterval(() => {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var day = date.getUTCDate();
        var month = date.getUTCMonth();
        var year = date.getFullYear();
        var weekN = parseInt(date.getDay());
        var name = ''
    
        switch (weekN) {
            case 1:
                name = '🌕│Monday'
                break;
            case 2:
                name = '🔥│Tuesday'
                break;
            case 3:
                name = '💧│Wednesday'
                break;
            case 4:
                name = '🌳│Thursday'
                break;
            case 5:
                name = '🧲│Friday'
                break;
            case 6:
                name = '🌱│Saturday'
                break;
            case 7:
                name = '☀️│Sunday'
                break;
        }
        var C = '';
        var A = '';
        if (day < 10) {
            C = '0'
        }
        if (month < 10) {
            A = '0'
        }
        channelDate.setName(`🗓│${C}${day}/${A}${month + 1}/${year}`)

        channelTime.setName(`Server Time:${hours}:${minutes}`)
        channelName.setName(`${name}`)
        // console.log(hours)
        // console.log(minutes)
    }, 5000);
}