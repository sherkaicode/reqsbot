module.exports = async (client) => {
    const guild = client.guilds.cache.get('790447283921616916');
    const Time = guild.channels.cache.get('822039680966459412');
    function getSuffix(hours) {
        if (hours >= 12) {
            if (hours == 12) {
                return [hours, 'PM'];
            }
            else {
                return [hours - 12, 'PM'];
            }
        }
        else {
            if (hours == 0) {
                return [12, 'AM']
            }
            return [hours, 'AM']
        }
    }
    function getEmoji(hours, min) {
        var hour = getSuffix(hours)
        switch (hour[0]) {
            case 1:
                if (min >= 30) {
                    return ['🕜', '30']
                }
                else {
                    return ['🕐', '00']
                }
                break;
            case 2:
                if (min >= 30) {
                    return ['🕝', '30']
                }
                else {
                    return ['🕑', '00']
                }
                break;
            case 3:
                if (min >= 30) {
                    return ['🕞', '30']
                }
                else {
                    return ['🕒', '00']
                }
                break;
            case 4:
                if (min >= 30) {
                    return ['🕟', '30']
                }
                else {
                    return ['🕓', '00']
                }
                break;
            case 5:
                if (min >= 30) {
                    return ['🕠', '30']
                }
                else {
                    return ['🕔', '00']
                }
                break;
            case 6:
                if (min >= 30) {
                    return ['🕡', '30']
                }
                else {
                    return ['🕕', '00']
                }
                break;
            case 7:
                if (min >= 30) {
                    return ['🕢', '30']
                }
                else {
                    return ['🕖', '00']
                }
                break;
            case 8:
                if (min >= 30) {
                    return ['🕣', '30']
                }
                else {
                    return ['🕗', '00']
                }
                break;
            case 9:
                if (min >= 30) {
                    return ['🕤', '30']
                }
                else {
                    return ['🕘', '00']
                }
                break;
            case 10:
                if (min >= 30) {
                    return ['🕥', '30']
                }
                else {
                    return ['🕙', '00']
                }
                break;
            case 11:
                if (min >= 30) {
                    return ['🕦', '30']
                }
                else {
                    return ['🕚', '00']
                }
                break;
            case 12:
                if (min >= 30) {
                    return ['🕧', '30']
                }
                else {
                    return ['🕛', '00']
                }
                break;
        }
    }
    setInterval(() => {
        var date = new Date();
        var hours = parseInt(date.getHours());
        var min = parseInt(date.getMinutes());
        var tSuffix = getSuffix(hours);
        var emoji = getEmoji(hours, min);


        //console.log(`${emoji[0]}│${tSuffix[0]}:${emoji[1]} ${tSuffix[1]}`)
        Time.setName(`${emoji[0]}│${tSuffix[0]}:${emoji[1]} ${tSuffix[1]}`)
    }, 5000);
}