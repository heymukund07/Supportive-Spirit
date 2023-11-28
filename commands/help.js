//EMBEDD : !ss help

const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = (bot, msg) => {
    const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
         const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Supportive Spirit')
	      .setDescription('Hi, Supportive Spirit bot is a fun and easy-to-use Mental Health Support Bot for fun, help, hugs and more! ❤️')
         .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')
      	.addFields(
            { name: 'How to find and use commands❔', value: "My prefix is ``!ss`` \nTo get started, please type one of the commands below."},
            //{ name: '\u200B', value: '\u200B' },

            { name: "```!ss breath```", value: 'Breath wizard, to calm yourself.', inline: false },
            { name: "```!ss cat```", value: 'Cute cat image attacks.', inline: false },
            { name: "```!ss selfcare```", value: 'Simple self care routine for you.', inline: false }, 
            { name: "``!ss report @member <reason>``", value: 'Anonymously  report a member', inline: false },
            { name: "```!ss helpmisc```", value: 'More commands.', inline: false },
     
            { name: '\u200B', value: '\u200B' },
            { name: "Other Useful Links", value: '\u200B', inline: false },
           
	      )
         .setFooter('Supportive Spirit', 'attachment://logo.png');
          msg.reply(exampleEmbed);
}