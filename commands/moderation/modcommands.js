/*
MOD COMMANDS SENT TO DM
ACCESS : MOD
COMMAND : !ss helpmod
*/
const Discord = require('discord.js');
module.exports = (bot,msg)=>{  
    const channel =msg.guild.channels.cache.find((channel => channel.id === '838739979290148905'));
    const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
         const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Projectmysa')
	      .setURL('https://www.instagram.com/projectmysa/')
	      //.setAuthor('Sartaj', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('Hi, ✨projectmysa bot is a fun and easy-to-use Mental Health Support Bot for fun, help, hugs and more! ❤️')
          .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')
          .addFields(
            { name: 'Please notify at least one more moderator before you kick/ban a member.\n\nBelow listed commands ```will be deleted once executed``` when sent in any text channel \n\nModerator commands:', value: "My prefix is ``!ss``"},
            //{ name: '\u200B', value: '\u200B' },
            { name: "``!ss announce <content>``", value: 'Make an announcement', inline: false },  
            { name: "``!ss warn <member>``", value: '⚠️ To warn a member', inline: false },
            { name: "``!ss kick <member>``", value: '🚪 To kick a member', inline: false },
	      	  { name: "``!ss ban <member>``", value: '🚫 To ban a member', inline: false },    
            { name: "Please notify ", value: `Please mention incident in <#${channel.id}>`, inline: true },    
               
	      	{ name: '\u200B', value: '\u200B' }
          
	      )
         .setFooter('Supportive Spirit', 'attachment://logo.png');
          msg.author.send(exampleEmbed);
}