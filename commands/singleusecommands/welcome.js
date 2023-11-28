const Discord = require('discord.js');
module.exports = (bot, msg) => {
    var contentdelivery =["Safe space is meant for your thoughts to be directly sent to moderators and support group.\nAny message sent in this chat will be sent and deleted from this channel. Thus maintaining total privacy"]
    var title =["Safe Space"]
    var channel_id =["838748507236990986"] //rules,
    for (i = 0; i < contentdelivery.length; i++){
    const toChannel = bot.channels.cache.find(channel =>channel.id === channel_id[i]);//rules
    const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
    const exampleEmbed = new Discord.MessageEmbed()
     .setColor('#0099ff')
     .setTitle(title[i])
    // .setURL('https://www.instagram.com/projectmysa/')
     .setAuthor('Supportive Spirit', 'attachment://logo.png')
     .setDescription(contentdelivery[i])
     //.attachFiles(attachment)
     .setThumbnail('attachment://logo.png')
    .setFooter('Supportive Spirit', 'attachment://logo.png')
    toChannel.send(exampleEmbed)
    /*.then(async embedMessage => {
        await embedMessage.react('✅');
    });
*/ }

}