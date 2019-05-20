const Discord = module.require("discord.js");


module.exports.run = async (client, message, args) => {
    message.channel.send(respuestas[Math.floor(Math.random() * respuestas.length)]);
}