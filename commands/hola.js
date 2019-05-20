const Discord = module.require("discord.js");

var respuestas = [
    "Hola!",
    "¿Como estás?",
    "Hola! Estoy para ayudarte.",
    "¿Que quieres hoy?",
    "Hola forastero!",
    "Aveces me quedo en los chats de voz & me quedo esuchandolos :3",
    "Bib bob be?",
    "JustABot al rescate!",
    "Todo lo que necesites",
    "Normalmente leo todos los mensajes que envian, es gracioso... O eso dicen los rusos...",
    "Tengo conciencia, de lo hermoso que eres bebé",
    "Mi creador es un asocial, estoy orgullosa de ello",
    "CUando vallas por la calle, recoje la basura porfa. Gracias :D",
    "No se te olvide votar cada 4 años! No seas un inutil :)"
]

module.exports.run = async (client, message, args) => {
    message.channel.send(respuestas[Math.floor(Math.random() * respuestas.length)]);
}