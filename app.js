const Discord = require('discord.js');
const fs = require('fs');
const { get } = require('http');
const publicIp = require('public-ip');
const client = new Discord.Client();


let token = fs.readFileSync("./discordtoken").toString()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
    if (msg.author.bot) return;

    try {
        if (!(Object.keys(msg.mentions.users.toJSON()).length === 0)){
            if (msg.mentions.users.toJSON()[0].id == 765951664095625266) { // very hard coded for the specific bot
                    getIP(msg)
            }
        }

    } catch {
        msg.reply("Något blev fel. Försök igen");
    }
});

client.login(token);

function getIP(msg){
    (async () => {   
        //(await publicIp.v6())
        msg.reply("IPv4 = " + (await publicIp.v4()))
    })();
}