module.exports = async (client) => {
    const guild = client.guilds.cache.get('790447283921616916');
    const channelTime = guild.channels.cache.get('821781980173172736');
    const channelDate = guild.channels.cache.get('818402690936602635');
    setInterval(() => {
        var date = new Date()
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var weekN = parseInt(date.getDay());
        
        var name = ''
        var C = '';
        var A = '';
        
        if (day < 10) {
            C = '0'
        }
        if (month < 10) {
            A = '0'
        }

        switch (weekN) {
            case 1:
                name = `📅│${year}/${A}${month + 1}/${C}${day} (月)`
                break;
            case 2:
                name = `📅│${year}/${A}${month + 1}/${C}${day} (火)`
                break;
            case 3:
                name = `📅│${year}/${A}${month + 1}/${C}${day} (水)`
                break;
            case 4:
                name = `📅│${year}/${A}${month + 1}/${C}${day} (木)`
                break;
            case 5:
                name = `📅│${year}/${A}${month + 1}/${C}${day} (金)`
                break;
            case 6:
                name = `📅│${year}/${A}${month + 1}/${C}${day} (土)`
                break;
            case 0:
                name = `📅│${year}/${A}${month + 1}/${C}${day} (日)`
                break;
        }
        channelDate.setName(`${name}`)
        
    }, 5000);
}