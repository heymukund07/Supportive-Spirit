//GAME : CREATE A POLL
//COMMAND : !ss poll <statement>
const { MessageReaction } = require("discord.js");
const Discord = require('discord.js');
module.exports = (bot,msg)=>{
      let args = msg.content.substring().split(" ");
      switch(args[1]){
          case "poll":
              const Embed = new Discord.MessageEmbed()
              .setColor(0xFFC200)
              .setTitle("Use")
              .setDescription("```!ss poll <statement>```");
              if(!args[2]){
                  msg.channel.send(Embed);
                  return;
              }
              let msgArgs = args.slice(2).join(" ");
              msg.channel.send("**"+ '📝POLL:\n ' +"**"+msgArgs).then(MessageReaction =>{
                  MessageReaction.react("👍");
                  MessageReaction.react("👎");
                 // msg.delete(5000).catch(console.error);
              });
        break;
      }
}