const Discord = module.require("discord.js");
const request = require('snekfetch');
const fs = require("fs")

module.exports.run = async (client, message, args) => {
    var max = 5511;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
        message.channel.send(":underage: Hey! No puedes usar este comando fuera del canal nsfw. Para cochinadas, por favor ve a el.")
    } else {
        var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
        request.get("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg").then(r => {
            fs.writeFile(`ass.jpg`, r.body)
            message.channel.sendFile(r.body)
            fs.unlink(`./ass.jpg`)
        })
    }
}