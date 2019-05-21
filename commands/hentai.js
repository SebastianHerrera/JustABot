const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai_anal'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send(":underage: Hey! No puedes usar este comando fuera del canal nsfw. Para cochinadas, por favor ve a el.")
  }
};