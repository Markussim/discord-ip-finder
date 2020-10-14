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
            if (msg.content.indexOf("!bot 4") === 0) {
                    getIP(msg, 4)
            }else if (msg.content.indexOf("!bot 6") === 0) {
                getIP(msg, 6)
        }
        }
    } catch {
        msg.reply("Något blev fel. Försök igen");
    }
});

client.login(token);

function getIP(msg, ip){
    (async () => {   
        if(ip == 4){
            msg.reply("IPv4 = " + (await publicIp.v4()))
        }else if(ip == 6){
            msg.reply("IPv6 = " + (await publicIp.v6()))
        }
    })();
}