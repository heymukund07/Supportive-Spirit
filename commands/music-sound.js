8/*
PLAY MUSIC IN VOICE CHAT
ACCESS : MOD, ADMIN
COMMAND : !ss play <https://<link>>, !ss skip, !ss stop
*/

const Discord = require("discord.js");
const { prefix, token } = require("../config");
const ytdl = require("ytdl-core");
const client = new Discord.Client();
const queue = new Map();
var theme
module.exports = (bot,msg)=>{
    try{
      var message = msg;
      if(message.content.substring().split(" ")[2] === "sea"){
        message.content = message.content + " https://www.youtube.com/watch?v=cB_CwY9dhrA&ab_channel=GoJoRelax";
        theme ="🐚 sea"
      }
      if(message.content.substring().split(" ")[2] === "rain"){
        message.content = message.content + " https://www.youtube.com/watch?v=vw8WxcIoixY&ab_channel=EpidemicAmbience";
        theme ="⛈️ rain"
      }
      if(message.content.substring().split(" ")[2] === "relax"){
        message.content = message.content + " https://www.youtube.com/watch?v=hso3oR8PJss&ab_channel=TickTockCountdownTimer";
        theme ="🙂 relax"
      }
    //  console.log(message.content)
  if (message.author.bot) return;
  const serverQueue = queue.get(message.guild.id);

  //serverQueue.connection.dispatcher.end();

  if (message.content.substring().split(" ")[0] === "!ss" && message.content.substring().split(" ")[1]=== "soundplay") {
    execute(message, serverQueue);
    return;
  }else if (message.content.substring().split(" ")[0] === "!ss" &&message.content.substring().split(" ")[1]=== "soundskip") {
    skip(message, serverQueue);
    return;
  }else if (message.content.substring().split(" ")[0] === "!ss" &&message.content.substring().split(" ")[1]=== "soundstop") {
    stop(message, serverQueue);
    return;
  } else {
    message.channel.send("You need to enter a valid command!");
  }
}catch(err){
    message.channel.send("Oops there is some error, please contact admin.");
    return;
}
};

async function execute(message, serverQueue) {
  
  if(!message.content.substring().split(" ")[3]) {
    message.channel.send("You need to enter a valid URL.");
    return;
}
const args = message.content.split(" ")[3];
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args);
  const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
   };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
     // console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`**${theme}** has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
    
  if (!serverQueue)
    return message.channel.send("There is no song that I could stop!");
    
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
  return message.channel.send("Stopped !");
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Now playing theme: **${theme}**`+ " for 5 minutes");
}