module.exports = async (client) => {
    const guild = client.guilds.cache.get('790447283921616916');
    const channelTime = guild.channels.cache.get('818402997297348668');
    const channelDate = guild.channels.cache.get('818402690936602635');
    const channelName = guild.channels.cache.get('818403206752370729');
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
        if (hours > 12) {
            nhours = hours - 12;
            suffix = 'PM'
        }
        if (hours == 1 || nhours== 1) {
            if (hours < 12) {
                channelTime.setName(`🕐│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕐│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 2 || nhours== 2) {
            if (hours < 12) {
                channelTime.setName(`🕑│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕑│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 3 || nhours== 3) {
            if (hours < 12) {
                channelTime.setName(`🕒│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕒│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 4 || nhours== 4) {
            if (hours < 12) {
                channelTime.setName(`🕓│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕓│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 5 || nhours== 5) {
            if (hours < 12) {
                channelTime.setName(`🕔│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕔│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 6 || nhours== 6) {
            if (hours < 12) {
                channelTime.setName(`🕕│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕕│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 7 || nhours== 7) {
            if (hours < 12) {
                channelTime.setName(`🕖│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕖│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 8 || nhours== 8) {
            if (hours < 12) {
                channelTime.setName(`🕗│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕗│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 9 || nhours== 9) {
            if (hours < 12) {
                channelTime.setName(`🕘│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕘│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 10 || nhours== 10) {
            if (hours < 12) {
                channelTime.setName(`🕙│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕙│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 11 || nhours== 11) {
            if (hours < 12) {
                channelTime.setName(`🕚│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕚│${nhours}:00 ${suffix}`)
            }
        }
        else if (hours == 12 || nhours== 12) {
            if (hours < 12) {
                channelTime.setName(`🕛│${hours}:00 ${suffix}`)
            }
            else {
                channelTime.setName(`🕛│${nhours}:00 ${suffix}`)
            }
        }

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
        channelDate.setName(`🗓│${A}${month + 1}/${C}${day}/${year}`)
        channelName.setName(`${name}`)
        // console.log(hours)
        // console.log(minutes)
    }, 5000);
}