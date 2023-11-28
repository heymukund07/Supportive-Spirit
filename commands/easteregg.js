//EMBEDD : !ss easteregg

const Discord = require('discord.js');
const { merge } = require("snekfetch");
const fs = require('fs');
const path = require('path');

module.exports = (bot,msg)=>{ 
  let rawdata = fs.readFileSync(path.resolve(__dirname, 'eastereggdata.json'));
  let data = JSON.parse(rawdata);
  var counter1 = data.counter1;
  var counter2 = data.counter2;
  var counter3 = data.counter3;

    const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
    const exampleEmbed = new Discord.MessageEmbed()
     .setColor('#0099ff')
     .setTitle('Supportive Spirit')
     .setDescription('ooooooo Hunting for easter eggs?\n Search answers to any of the following question. \nAll The Best!')
    .attachFiles(attachment)
     .setThumbnail('attachment://logo.png')
     .addFields(
       //{ name: '\u200B', value: '\u200B' },
       { name: "1. A 3 digit number:|Egs remaining:"+`${counter1}`, value: '```!ss easter 1 ***```', inline: false },
       { name: "2. My masters favourite videogame:|Egs remaining:"+`${counter2}`, value: '```!ss easter 2 ****```', inline: false},
       { name: "3. Date on which ProjectMysa was founded:|Egs remaining:"+`${counter3}`, value: '```!ss easter 3 DDMMYY```', inline: false },
       { name: '\u200B', value: '\u200B' },
       { name: 'For complete help list', value: "``!ss help``", inline: false }, 
     )
    .setFooter('Supportive Spirit', 'attachment://logo.png');
     msg.reply(exampleEmbed);
    }
    