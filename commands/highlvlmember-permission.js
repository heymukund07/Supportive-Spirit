//CHECKS IF MEMBER IS HIGH LVL OR NOT

module.exports = (bot,msg)=>{  //admin mod lvl3
        if(msg.member.roles.cache.some(r=>r.id ==="838740484687396884")|| msg.member.roles.cache.some(r=>r.id ==="838741294930591775")|| msg.member.roles.cache.some(r=>r.id ==="841964978679578675")){
        return true;
    }   
}