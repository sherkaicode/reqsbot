module.exports = async (client) => {
    const guild = client.guilds.cache.get('790447283921616916');
    const channelTime = guild.channels.cache.get('818402997297348668');
    const channelDate = guild.channels.cache.get('818402690936602635');
    setInterval(() => {
        var date = new Date();
        var hours = parseInt(date.getHours());
        var day = date.getUTCDate();
        var month = date.getUTCMonth();
        var year = date.getFullYear();
        var weekN = parseInt(date.getDay()); 
        var name = ''
        var nhours;
        var suffix = 'AM'
        if (hours > 12 || hours == 12) {
            nhours = hours - 12;
            suffix = 'PM'
            if (hours == 24) {
                suffix = 'AM'
            }
        }

        if (hours == 1 || nhours == 1) {
            if (hours <= 12) {
                channelTime.setName(`🕐│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕐│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 2 || nhours== 2) {
            if (hours <= 12) {
                channelTime.setName(`🕑│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕑│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 3 || nhours== 3) {
            if (hours <= 12) {
                channelTime.setName(`🕒│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕒│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 4 || nhours== 4) {
            if (hours <= 12) {
                channelTime.setName(`🕓│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕓│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 5 || nhours== 5) {
            if (hours <= 12) {
                channelTime.setName(`🕔│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕔│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 6 || nhours== 6) {
            if (hours <= 12) {
                channelTime.setName(`🕕│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕕│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 7 || nhours== 7) {
            if (hours <= 12) {
                channelTime.setName(`🕖│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕖│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 8 || nhours== 8) {
            if (hours <= 12) {
                channelTime.setName(`🕗│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕗│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 9 || nhours== 9) {
            if (hours <= 12) {
                channelTime.setName(`🕘│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕘│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 10 || nhours== 10) {
            if (hours <= 12) {
                channelTime.setName(`🕙│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕙│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 11 || nhours== 11) {
            if (hours <= 12) {
                channelTime.setName(`🕚│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕚│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 12 || nhours== 12) {
            if (hours <= 12) {
                channelTime.setName(`🕛│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕛│${nhours}:00 ${suffix}`)
            }
        }
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
                name = `🗓│${year}/${A}${month + 1}/${C}${day} (月)`
                break;
            case 2:
                name = `🗓│${year}/${A}${month + 1}/${C}${day} (火)`
                break;
            case 3:
                name = `🗓│${year}/${A}${month + 1}/${C}${day} (水)`
                break;
            case 4:
                name = `🗓│${year}/${A}${month + 1}/${C}${day} (木)`
                break;
            case 5:
                name = `🗓│${year}/${A}${month + 1}/${C}${day} (金)`
                break;
            case 6:
                name = `🗓│${year}/${A}${month + 1}/${C}${day} (土)`
                break;
            case 7:
                name = `🗓│${year}/${A}${month + 1}/${C}${day} (日)`
                break;
        }
        channelDate.setName(`${name}`)
    }, 5000);
}