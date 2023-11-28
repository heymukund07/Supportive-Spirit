
module.exports = (bot,msg)=>{ 
   var random = [ "http://stars.chromeexperiments.com/",
    "http://www.lookingatsomething.com/",
    "http://weavesilk.com/https://recommendmeabook.com/",
    "https://recommendmeabook.com/",
    "http://wxs.ca/iso/",
    "http://cabbi.bo/light/",
    "https://asoftmurmur.com/",
    "https://roboboogie.codeclub.org.uk/",
    "https://quickdraw.withgoogle.com/",
    "https://musiclab.chromeexperiments.com/Song-Maker"
    ]
    var length = random.length
   var no =  Math.floor((Math.random() * length) + 1);
   if(random[no]===undefined) msg.channel.send("Check out this website: "+ random[1]);
   msg.channel.send("Check out this website: "+ random[no]);
}