/*
FUN : CREATS A REPORT
ACCESS : 
COMMAND : !ss report <@member> reason
*/
const Discord = require('discord.js');
const discordID = require("./DiscordID.json");
const modchatid = discordID.MODCHAT_ID
const adminid = discordID.ADMIN_ID
const mod_id = discordID.MOD_ID
module.exports = (bot,msg)=>{ 
   const target = msg.mentions.users.first();
   const newmsg = msg;
   if(!msg.content.substring().split(" ")[3]) {
      msg.delete()
      return newmsg.author.send("Report reason not mentioned.")  
   }
   if(msg.content.substring().split(" ")[0] === "!ss" && msg.content.substring().split(" ")[1]==="report"){
   msg.delete()
   try{
      newmsg.guild.members.cache.get(target.id)
   }catch{return newmsg.author.send('Please provide a user that you wish to report');}
   const memberTarget = newmsg.guild.members.cache.get(target.id)
   
   if(!target) return newmsg.author.send('Please provide a user that you wish to report');
   if(memberTarget.roles.cache.some(r=>r.id === mod_id)||memberTarget.roles.cache.some(r=>r.id === adminid)){
      return newmsg.author.send('Cannot report mods.');
   }
   else{
    var content = newmsg.content.substring().split(" ");
    var contentdelivery = " "
    for (i = 3; i < content.length; i++){
     contentdelivery  = contentdelivery + content[i] + " ";
   }

   const Moderator = msg.guild.roles.cache.find(role => role.id == mod_id);
   const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
      const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTimestamp() 
            .setAuthor("Reported member",target.displayAvatarURL())
            .attachFiles(attachment)
            .setDescription(`
            **> Member Reported:** ${target}
            **> Reported by:** ${newmsg.author}
            **> Reported in:** ${newmsg.channel}
            **> Reason:** ${contentdelivery}
            **> URL:** ${newmsg.url}`)
            .addField("Alert", `${Moderator ? `${Moderator}` : "role not found"}`)
            .setFooter('Supportive Spirit', 'attachment://logo.png');
      const  toChannel = bot.channels.cache.find(channel =>channel.id === modchatid);   
      newmsg.author.send(`**Report Alert**\n\nReported: ${target}\nFor: ${contentdelivery}\nIn channel: ${newmsg.channel}\nURL: ${newmsg.url}`);
      toChannel.send(embed);
      }
   }
}
