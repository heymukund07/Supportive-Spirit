/*
EASTEREGG/ HUNT GAME FOR A SPECIAL ROLE
COMMAND : !ss easter 1/2/3 <answer>
*/
const { MessageReaction } = require("discord.js");
const Discord = require('discord.js');
const { merge } = require("snekfetch");
const fs = require('fs');
const path = require('path');
const easteregg = "840801208595644446"
const easteregg_ID = easteregg 
let rawdata = fs.readFileSync(path.resolve(__dirname, 'eastereggdata.json'));
let data = JSON.parse(rawdata);
var counter1
var counter2 
var counter3 
var counter11 = data.counter1;
var counter22 = data.counter2;
var counter33 = data.counter3;
randomDigit = data.randomDigit;

module.exports = (bot,msg)=>{
    var array = msg.content.substring().split(' ');
     if(array[0]==="!ss" && array[1]==="easter"&& array[3]){
        if(msg.member.roles.cache.some(r=>r.name ==="🥚 egg hunter")){
            msg.reply("You already have found an egg, let other members try.") 
            return ;
        }
        let rawdata = fs.readFileSync(path.resolve(__dirname, 'eastereggdata.json'));
        let data = JSON.parse(rawdata);
         counter1 = data.counter1;
         counter2 = data.counter2;
         counter3 = data.counter3;
        randomDigit = data.randomDigit;    
       if(array[2]==="1" && counter1!==0){
        if(counter1<=0) {
            msg.reply("easter egg completed 🙁!!!") 
            return;}
           if(randomDigit.find(no => no  === array[3] )){ // find array 3 in data.random nos
               const newMsg = msg;
               msg.delete();
               let role = newMsg.member.guild.roles.cache.find(role => role.id === easteregg_ID);
               if (role) newMsg.guild.members.cache.get(newMsg.author.id).roles.add(role);
               newMsg.reply("@everyone look!\n"+`<@${newMsg.author.id}>` +" has found an egg 🥚!!!\n🎉 Special reward: role added: "+ role.name+"\n🙌🏻 You get to choose the server icon for 1 Week🙌🏻. Message a moderator for more info\n (Your answer was deleted) ")               //give user the special role
               counter11= counter1-1;

               if(counter11<=0)counter1===0;
               //remove the element from array
               const index = randomDigit.indexOf(array[3]);
                if (index > -1)  randomDigit.splice(index, 1);
           }else return;
       }
       if(array[2]==="2"){
        let rawdata = fs.readFileSync(path.resolve(__dirname, 'eastereggdata.json'));
        let data = JSON.parse(rawdata); var counter1 = data.counter1;
        counter2 = data.counter2; 
        if(counter2<=0) {
            msg.reply("easter egg completed 🙁!!!") 
            return;}
           
           if(array[3] === "csgo"){   
            counter22= counter2 - 1
            if(counter22<=0)counter22===0;
            const newMsg = msg;
             msg.delete();
            let role = newMsg.member.guild.roles.cache.find(role => role.id === easteregg_ID);
            if (role) newMsg.guild.members.cache.get(newMsg.author.id).roles.add(role);
            newMsg.reply("@everyone look!\n"+`<@${newMsg.author.id}>` +" has found an egg 🥚!!!\n🎉🎉🎉 Special reward: role added: "+ role.name+"\n 🙌🏻You get to choose the server icon for 1 Week. Message a moderator for more info\n(Your answer was deleted) ")
           }
       }
       if(array[2]==="3"){
        let rawdata = fs.readFileSync(path.resolve(__dirname, 'eastereggdata.json'));
        let data = JSON.parse(rawdata);
         counter3 = data.counter3; 
       if(counter3<=0) {
        msg.reply("easter egg completed 🙁!!!") 
        return;}{
        if(array[3] === "010121"){  
            counter33 = counter3 -1
            if(counter33<=0)counter33===0;
         const newMsg = msg;
         msg.delete();
         let role = newMsg.member.guild.roles.cache.find(role => role.id === easteregg_ID);
         if (role)  newMsg.guild.members.cache.get(newMsg.author.id).roles.add(role);
         newMsg.reply("@everyone look!\n"+`<@${newMsg.author.id}>` +" has found an 🥚!!\n 🙌🏻Special reward: role added: "+ role.name+"\n🎉🎉 You get to choose the server icon for 1 Week. Message a moderator for more info\n (Your answer was deleted) ")
        }
    }
    }
    var tostore = {
        counter1 : counter11,
        counter2 : counter22,
        counter3 : counter33,
        randomDigit : randomDigit
    }
    //write to json ->pending
    fs.writeFile("./commands/eastereggdata.json", JSON.stringify(tostore,null,4),err=>{
        if(err) throw err;
       // msg.reply("data added!!!") 
      // console.log("JSON updated")   
    })
    } else msg.reply("Invalid para!!!") 
 }
