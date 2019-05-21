const Discord = module.require("discord.js");
const request = require('snekfetch');
const fs = require("fs")
const superagent = require('superagent')


module.exports.run = async (client, message, args) => {
    if (!message.channel.nsfw) {
        message.channel.send(":underage: Hey! No puedes usar este comando fuera del canal nsfw. Para cochinadas, por favor ve a el.")
    } else {
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'ass'})
        .end((err, response) => {
          message.channel.send({ file: response.body.message });
        });
    }
}