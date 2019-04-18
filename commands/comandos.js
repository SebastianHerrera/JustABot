const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    const embed = {
        "url": "https://sebasbeleno.000webhostapp.com/",
        "description": "Estos son alunos de los comandos que tenemos disponibles actualmente. Con el tiempo podre aregar más. Besos <3",
        "color": 9442302,
        "timestamp": "2019-04-17T23:22:01.581Z",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "Bot by: Sebastian Herrera"
        },
        "author": {
          "name": "author name",
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "fields": [
          {
            "name": "stado",
            "value": "Revisa el estado del bot en el momento, desarrolador o abierto"
          },
          {
            "name": "ping",
            "value": "Mide la latencia entre el bot y el servidor, y la api de discordjs!"
          },
          {
            "name": "help",
            "value": "Te dice todos los comandos disponibles para la funcion de poner musica. Hechales un vistaso ;)"
          },
          {
            "name": "avatar {@usuario}",
            "value": "Te manda el avatar el usuario expecificado"
          },
          {
            "name": "purga {#mensajes}",
            "value": "Elemina el numero de mensajes expecificado"
          }
        ]
      };
      await message.channel.send({ embed });
}