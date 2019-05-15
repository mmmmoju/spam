const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get(578156819613220866)
setInterval(function() {
channel.send(578156819613220866hhh);
}, 30)
})

client.login(process.env.BOT_TOKEN);
