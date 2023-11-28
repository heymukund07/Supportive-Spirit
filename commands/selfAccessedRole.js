//INCOMPLETE
//REMOVE LATER
const { DiscordAPIError } = require("discord.js")
/*
module.exports = (bot,msg,message)=>{
        console.log("in function")
       // return "pong"
       msg.author.send('How is this bot?').then(async (start)=>{
        //const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        bot.on('collect', message => {
                if (message.content == "See") {
                        msg.author.send("You Want To See Someones Spec OK!");
                    } else if (message.content == "Change") {
                        msg.author.send("You Want To Change Your Spec OK!");
                    }
        })       
       })
}
*/
/*
module.exports = async (bot, message, args, count) => {
        if(message.channel.id === '838748234133405717' && count ==="1") return message.author.send(`Greetings, ${message.author.username}! FIRST QUESTION, **What is the name of your Brawler or Character?**`)
          .then((newmsg) => { 
           setTimeout(() => {console.log("World!"); }, 10000);
            newmsg.channel.awaitMessages(response => response.content, {
              max: 1,
              time: 10000,
              errors: ['time'],
            }).then((collected) => {
              newmsg.channel.send(`Your Name is: ${collected.first().content}`);
              
            }).catch((collected) => {
              newmsg.channel.send('Please submit a name for your character. To restart Profile creation, please type "!profilecreate" command in Profile Creation channel on the server.');
            });
          });
        
        if(message.channel.id === '838748234133405717' && count ==="2") return message.author.send(`Greetings, ${message.author.username}! Second QUESTION, **What is the name **`)
          .then((newmsg) => { 
              //  setTimeout(() => {console.log("World!"); }, 10000);
            newmsg.channel.awaitMessages(response => response.content, {
              max: 1,
              time: 10000,
              errors: ['time'],
            }).then((collected) => {
              newmsg.channel.send(`Your surname is: ${collected.first().content}`);
            }).catch((collected) => {
              newmsg.channel.send('Please submit a name for your character. To restart Profile creation, please type "!profilecreate" command in Profile Creation channel on the server.');
            });
          });
}
*/

module.exports = (bot, message, args, count) => {

  const questions = [                    // ------------------------------------
    "What's your IGN?",                  //
    "How old are you?",                  // Define the questions you'd like the
    "What time zone do you reside in?",  // application to have in this array.
    "Do you have Schematica?"            //
  ]; 

  try {
    let filter = m => m.author.id === message.author.id
    var flag = 0;
    let counter = 0;

      //  message.channel.send('How is this bot?')
        if(message.guild.id !== "838748234133405717"  ){
               // message.author.send(message);
               //console.log(message.content);
                if(message.content ==="!ss getrole"){

                  for (let i = 0, cancel = false; i < questions.length && cancel === false; i++) {  
                 // console.log("here");
                  message.author.send(questions[i]).then(()=>{
                    message.author.dmChannel.awaitMessages(filter,{
                      max:4,
                      time:10000,
                      //errors: ['time'] 

                    })
                    .then(message=>{
                      counter = counter+1
                      //console.log("msg received")
                      message = message.first()
                     // message.author.send('got it');
                      if(message.content!=="1"){
                        
                        message.author.send('got it');
                        message.author.send(message.content);
                    
                       // message.author.send("your response was 1")
                      }
                    })
                    .catch(collected =>{
                      message.author.send('Timeout');
                    })
                  })
                  console.log(counter)
                }
                 




                }// main if
        }
      }catch(error) {
         console.log(error);
          return;
      }
      
      
}       
        
