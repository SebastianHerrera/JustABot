const Discord = module.require("discord.js");
const request = require('snekfetch');
const fs = require("fs")
const randomPuppy = require('random-puppy');


module.exports.run = async (client, message, args) => {
    if (!message.channel.nsfw) return   message.channel.send(":underage: Hey! No puedes usar este comando fuera del canal nsfw. Para cochinadas, por favor ve a el.")

    message.channel.send("Ay! :( Comando en mantenimiento, escribele a Justbel... Dile que lo arregle.")
}