const botchatid = "838764293242880042"
const fs = require('fs');
const path = require('path');
module.exports = (bot)=>{ 
    var channel = bot.channels.cache.find(c=> c.id === botchatid)

    let rawdata = fs.readFileSync(path.resolve(__dirname, 'timedmessagescontent.json'));
    let data = JSON.parse(rawdata);
    const messages = data.messagecontent
    var msize = messages.length
    const randomNum = (Math.floor(Math.random()* msize)); 
    var msg = messages[randomNum]

    channel.send(msg)
}