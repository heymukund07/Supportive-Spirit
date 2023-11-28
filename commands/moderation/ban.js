/*
PERMA BAN A MEMBER : 
ACCESS : MOD, ADMIN
COMMAND : !ss kick <@member>
*/
const discordID = require("./DiscordID.json");
const botlogid = discordID.BOTLOG_ID
const adminid = discordID.ADMIN_ID
const mod_id = discordID.MOD_ID
module.exports = (bot,msg)=>{ 
    const member = msg.mentions.users.first();
    const newmsg = msg;
    msg.delete()
    if(member){
        const  tologs = bot.channels.cache.find(channel =>channel.id === botlogid);
        const memberTarget = newmsg.guild.members.cache.get(member.id)
        if(memberTarget.roles.cache.some(r=>r.id === mod_id)||memberTarget.roles.cache.some(r=>r.id === adminid)){
            newmsg.channel.send("Cant ban moderators\n Please notify admin.");
                  
            const modre = newmsg.author;
            tologs.send("\n❌❌❌: \n\n"+`${modre}`+" TRIED TO BAN "+ `${member}`);
            return;
        }
        memberTarget.ban();       
        const modre = newmsg.author;
        tologs.send("❌❌❌\n\n"+`${modre}`+" BANNED "+ `${member}`);
        newmsg.channel.send("🚫 "+`${member}` + "** Is Banned**"+"\nby "+`${modre}` );
    }else{
        msg.channel.send("User not mentioned.")
    }   
    }   