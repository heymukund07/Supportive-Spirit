//EMBEDD : !ss helpmisc

const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = (bot, msg) => {
    if(msg.content ==="!ss helpmisc"){
        //msg.reply('made to misc help')
        const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
         const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Supportive Spirit')
	      .setDescription('Hi, Supportive Spirit bot is a fun and easy-to-use Mental Health Support Bot for fun, help, hugs, and more!')
         .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')
      	.addFields(
            { name: 'How to find and use commands', value: "My prefix is ``!ss`` \nTo get started, please type one of the commands below."},
            //{ name: '\u200B', value: '\u200B' },
	      	{ name: "``!ss master``", value: 'Random fact about who make me.', inline: false },
            { name: "``!ss ping``", value: 'How far are we?', inline: false },
            { name: "``!ss coinflip``", value: 'Heads/Tails', inline: false },
            { name: "``!ss poll <statememt>``", value: 'Make a poll', inline: false },
            { name: "``!ss fun``", value: 'Sends you link to a random fun website', inline: false },

            { name: "```!ss play/stop/skip <URL>```", value: 'Music commands', inline: false },
            { name: "```!ss soundplay/soundstop/soundskip <sea/rain/relax>```", value: 'Sound commands', inline: false },
            
            { name: "```!ss easteregg```", value: '??????', inline: false },
            { name: "``!ss poke @member``", value: 'Poke a user', inline: false },
            { name: "``!ss sendlove @member``", value: 'Show your love', inline: false },
            { name: "```!ss helpmod```", value: 'Moderator commands help', inline: false },
            { name: "``!ss help``", value: 'For complete help list', inline: false },

            { name: '\u200B', value: '\u200B' },
	      )
         .setFooter('Supportive Spirit', 'attachment://logo.png');
          msg.reply(exampleEmbed);
    }

}