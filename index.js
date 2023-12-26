const Discord = require('discord.js');
const { Client } = require('discord.js');
const config = require("./config.json");
const { OpenAI } = require('openai');
const fetch = require("node-fetch");
const bot = new Discord.Client();

const token = config.BOT_TOKEN;
const confessHere = config.confessHereToken;
const confessions = config.confessionsToken;
const mod_id = config.MOD_ID;
const msgtimer = config.MESSAGE_TIMER; //around 1 day

const helpmisc = require('./commands/helpmisc.js');
const poll = require('./commands/poll.js');
const permission = require('./commands/moderation/permission');
const pokeLove = require('./commands/pokeLove');
const easteregg = require('./commands/easteregg');
const eastereggworker = require('./commands/easteregg-worker');
const modcommands = require('./commands/moderation/modcommands');
const kick = require('./commands/moderation/kick');
const ban = require('./commands/moderation/ban');
const warn = require('./commands/moderation/warn');
const music = require('./commands/music');
const fun = require('./commands/fun.js');
const help = require('./commands/help');
const musicSound = require('./commands/music-sound');
const announcement = require('./commands/moderation/announcement');
const welcome = require('./commands/singleusecommands/welcome');
const report = require('./commands/moderation/report');



const openai = new OpenAI({
   apiKey: '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',
   engine: ['text-davinci-003'],
   model: 'gpt-3.5-turbo',
});

bot.on('ready', () => {
   console.log('Bot Online');
   console.log(`${bot.user.tag} is now watching online!`);
   bot.user.setActivity(' !ss help | Supportive Spirit', { type: "PLAYING" });
});

bot.on('message', async msg => {
   //Single time
   if (msg.content === "!ss singletime") {
      if (permission(bot, msg)) welcome(bot, msg)
      return;
   }
   //
   if (msg.content.substring().split(" ")[0] === "!ss" && msg.channel.id === confessHere) {
      const channel = msg.guild.channels.cache.find((channel => channel.id === confessHere));
      msg.author.send(`Sorry you cannot use !ss commands in <#${channel.id}>`)
      msg.delete()
      return;
   }
   //basic commands
   if (msg.author.bot) return;
   if (msg.content === "!ss hi") {
      msg.reply('Hello from the local server 👋🏻')
   }
   if (msg.content === "!ss master") {
      const facts = ["He likes green apples🍏 more than red🍎.",
         "Send him memes",
         "Coffee is his life",
         "His favourite song: Till I Collapse",
         "His favourite language: Python ",
         "He loves computers and coding",
         "His favourite book: Cracking the coding interview",
         "His favourite YT: Sentdex",
         "Wanna stalk? Go star his GitHub, he would love that",
      ]
      try {
         const randomNum = (Math.floor(Math.random() * facts.length));
         msg.reply(facts[randomNum])
      } catch (err) {
         msg.reply("He's still working 👨‍💻")
      }
   }
   if (msg.content === "!ss ping") {
      const timeTaken = msg.createdTimestamp - Date.now();
      msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
   }
   if (msg.content === "!ss coinflip") {
      const randomNum = (Math.floor(Math.random() * 2) + 1).toString();
      if (randomNum === '1') msg.reply("Heads");
      else msg.reply("Tails");
   }
   //music bot 
   if (msg.content.substring().split(" ")[0] === "!ss" && (msg.content.substring().split(" ")[1] === "play") || (msg.content.substring().split(" ")[1] === "pause") || (msg.content.substring().split(" ")[1] === "stop") || (msg.content.substring().split(" ")[1] === "skip")) {
      if (permission(bot, msg)) music(bot, msg);
      else {
         msg.channel.send("Look If you had One shot, Or, one opportunity To seize everything you ever wanted, In one moment...");
         msg.channel.send("This is weird... I guess you dont the permission to use this commad");
      }
   }
   if (msg.content.substring().split(" ")[0] === "!ss" && (msg.content.substring().split(" ")[1] === "soundplay") || (msg.content.substring().split(" ")[1] === "soundpause") || (msg.content.substring().split(" ")[1] === "soundstop") || (msg.content.substring().split(" ")[1] === "skip")) {
      if (permission(bot, msg)) musicSound(bot, msg);
      else {
         msg.channel.send("Look If you had One shot, Or, one opportunity To seize everything you ever wanted, In one moment...");
         msg.channel.send("This is weird... I guess you dont the permission to use this commad");
      }
   }

   //
   if (msg.content.substring().split(" ")[0] === "!ss" && msg.content.substring().split(" ")[1] === "poll") {
      try {
         poll(bot, msg);
      } catch (err) { }
   }
   if (msg.content.substring().split(" ")[0] === "!ss" && msg.content.substring().split(" ")[1] === "poke") {
      pokeLove(bot, msg)
      return;
   }
   if (msg.content.substring().split(" ")[0] === "!ss" && msg.content.substring().split(" ")[1] === "sendlove") {
      pokeLove(bot, msg)
      return;
   }

   //moderation
   if (msg.content === '!ss helpmod') {
      if (permission(bot, msg)) {
         msg.reply("I have sent you a DM of moderator commands.");
         modcommands(bot, msg)
         return;
      }
      else {
         msg.reply("\nTo ban people use !ss .....\noops!\nyou dont seem to be a moderator!!\nCommand not permitted");
      }
   }
   if (msg.content.substring().split(" ")[0] === "!ss" && msg.content.substring().split(" ")[1] === "warn") {
      if (permission(bot, msg)) warn(bot, msg)
   }
   if (msg.content.substring().split(" ")[0] === "!ss" && msg.content.substring().split(" ")[1] === "kick") {
      if (permission(bot, msg)) kick(bot, msg)
   }
   if (msg.content.substring().split(" ")[0] === "!ss" && msg.content.substring().split(" ")[1] === "ban") {
      if (permission(bot, msg)) ban(bot, msg)
   }
   if (msg.content.substring().split(" ")[0] === "!ss" && msg.content.substring().split(" ")[1] === "announce") {
      if (permission(bot, msg)) announcement(bot, msg);
      if (!permission(bot, msg)) {
         console.log("here")
         msg.delete()
         msg.author.send('Sorry, you dont have enough XP role to report. Please contact moderators using ``!ss connect ``');
      }
   }
   if (msg.content.substring().split(" ")[0] === "!ss" && msg.content.substring().split(" ")[1] === "report") {
      if (highlvlmemberPermission(bot, msg)) report(bot, msg);
      else {
         msg.delete()
         msg.author.send('Sorry, you dont have enough XP role to report. Please contact moderators using ``!ss connect ``');
      }
   }
   //
   if (msg.content === "!ss fun") {
      fun(bot, msg)
      return;
   }

   if (msg.content === "!ss getrole") {
      msg.author.send("WIP");
      return;
   }

   //primary command
   if (msg.content === "!ss help") {
      help(bot, msg)
      return;
   }
   if (msg.content === '!ss helpmisc') {
      helpmisc(bot, msg)
      return;
   }
   if (msg.content === '!ss easteregg') {
      easteregg(bot, msg)
      return;
   }
   var array = msg.content.substring().split(' ');
   if (array[0] === "!ss" && array[1] === "easter") {
      eastereggworker(bot, msg)
      return;
   }
   //Heal bot
   // bug: gif file not loading
   if (msg.content === `!ss connect`) {
      msg.reply('Hi, I have messaged the moderators. You should receive a new message soon. :heart: ');
      msg.react(`✅`);
      const Moderator = msg.guild.roles.cache.find(role => role.id == mod_id);
      const toConfessions = await bot.channels.fetch(confessions);
      const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
      const embed = new Discord.MessageEmbed()
         .setColor("#0099ff")
         .setTimestamp()
         .setAuthor("Connect", msg.author.displayAvatarURL())
         .attachFiles(attachment)
         .setDescription(`
            **> Connect to:** ${msg.author}`)
         .addField("Alert", `${Moderator ? `${Moderator}` : "role not found"}`)
         .setFooter('Supportive Spirit', 'attachment://logo.png');
      toConfessions.send(embed)

   }
   if (msg.content === `!ss breath`) {
      const randomNum = (Math.floor(Math.random() * 6) + 1).toString();
      var array = ["breath1", "breath2", "breath3", "breath4", "breath5", "breath6"]
      const breath = "breath" + `${randomNum}` + ".gif";
      const ballembed = new Discord.MessageEmbed()
         .setColor(0x000000)
         .setDescription(`Try this for a minute. \nEverything will be okay :heart:`)
         .attachFiles("media/" + `${breath}`)
      msg.reply(ballembed);

   }
   if (msg.content === `!ss cat`) {
      try {
         msg.react(`🐈`);
         fetch('https://aws.random.cat/meow').then(res => res.json()).then(res => {
            const embed = new Discord.MessageEmbed()
               .setImage(res.body.file)
               .setColor('#0099ff')
            return msg.channel.send({ embed });
         });
      } catch (err) {
         return console.log(err.stack);
      }
   }
   if (msg.content === `!ss selfcare`) {
      const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
      const exampleEmbed = new Discord.MessageEmbed()
         .setColor('#0099ff')
         .setTitle('Supportive Spirit')
         .setDescription('Hi, ✨Supportive Spiritbot is a fun and easy-to-use Mental Health Support Bot for fun, help, hugs and more!❤️')
         .attachFiles(attachment)
         .setThumbnail('attachment://logo.png')

      const randomNum = (Math.floor(Math.random() * 2) + 1).toString();
      if (randomNum === '1') {
         exampleEmbed.addFields(
            { name: 'You routine for the day ', value: "\u200B" },
            //{ name: '\u200B', value: '\u200B' },
            {
               name: "• drink water  \n• eat a meal \n• take medications (if needed) \n• make your bed  \n• brush your teeth  \n• take a few deep breaths and stretch  \n• take some time to yourself \n• tidy up \n• be kind to yourself, always"
               , value: "\u200B", inline: false
            },
         )
      }
      else {
         exampleEmbed.addFields(
            { name: '• call a Friend \n• visit a friend \n• pet a cat/dog \n• cook your favourite dish ', value: "\u200B" },
         )
      }//add more cases
      exampleEmbed.setFooter('Supportive Spirit', 'attachment://logo.png');
      msg.reply(exampleEmbed);
   }
   //

   //confession

   if (msg.channel.id === confessHere) {
      const newMsg = msg;
      msg.delete();
      const toConfessions = bot.channels.cache.find(channel => channel.id === confessions);
      const userTag = newMsg.author.tag;
      toConfessions.send({
         embed: {
            color: 3447003,
            title: `New Confession `,
            fields: [
               { name: "@" + 'moderator' + " ", value: " please care" },
               { name: `From: ${userTag}`, value: `Message: \n${newMsg}` },
            ]
         }
      });
   }

   if (msg.author.bot) return;

   if (msg.content.startsWith('!ss talk')) {
      const userMessage = msg.content.slice('!ss talk'.length).trim();
      try {

         const response = await openai.chat.completions
            .create({
            model: "davinci",
            prompt: userMessage,
            temperature: 0.9, 
            max_tokens: 50,
            
         })


      msg.reply(response.choices[0].text);
      } catch (error) {
         console.error('OpenAI API error:', error);
         msg.reply('Sorry, there was an error processing your request.');
      }
   }
});




bot.login(token);
