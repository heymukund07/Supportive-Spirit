//CHECKS IF MEMBER IS MOD OR NOT

module.exports = (bot,msg)=>{  
        if(msg.member.roles.cache.some(r=>r.id ==="838740484687396884")|| msg.member.roles.cache.some(r=>r.id ==="838741294930591775")){
        return true;
    }    
}