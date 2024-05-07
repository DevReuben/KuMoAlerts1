const Discord = require('discord.js');
const Keep_alive = require('./Keep_alive.js')
const client = new Discord.Client({ intents: [] });
client.once('ready', () => {
    console.log(`We have logged in as ${client.user.tag}`);
});
client.login(process.env.TOKEN);