const botchatid = "838764293242880042";
const fs = require('fs');
const path = require('path');

module.exports = (bot) => {
    try {
        // Find the channel with the specified ID
        var channel = bot.channels.cache.find(c => c.id === botchatid);

        // Check if the channel is valid
        if (!channel) {
            console.error(`Channel with ID ${botchatid} not found.`);
            return;
        }

        // Read timed messages from the JSON file
        let rawdata = fs.readFileSync(path.resolve(__dirname, 'timedmessagescontent.json'));
        let data = JSON.parse(rawdata);
        const messages = data.messagecontent;

        // Check if there are messages in the array
        if (messages.length === 0) {
            console.error("No timed messages found in the JSON file.");
            return;
        }

        // Generate a random index to select a message
        const randomNum = Math.floor(Math.random() * messages.length);
        var msg = messages[randomNum];

        // Send the message to the channel
        channel.send(msg);
    } catch (error) {
        console.error("An error occurred:", error);
    }
};
