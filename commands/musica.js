const Discord = module.require("discord.js");


module.exports.run =  (client, message, args) => {
    const embed = {
        "title": "Los comandos de musica!",
        "description": "Puedo reproducir muscia, toda la que quiras. Aquí todos mis comandos",
        "color": 9442302,
        "timestamp": "2019-05-20T03:44:02.826Z",
        "footer": {
          "text": "Sebastian Beleño"
        },
        "fields": [
          {
            "name": "-play",
            "value": "Te coloco una cancion, con la URL de Youtube, o simplemente el nombre de la cancion"
          },
          {
            "name": "-volume",
            "value": "Cambio el volumen de la cancion {0-100}"
          },
          {
            "name": "-remove",
            "value": "Eliminar una canción de la cola por posición en la cola."
          },
          {
            "name": "-skip",
            "value": "Salta una cancion, puedes indicar cual con '-skip {numero}'"
          },
          {
            "name": "-leave",
            "value": "Me sacas del chat de voz. Me gusta escuchar lo que hablan :3"
          },
          {
            "name": "-search",
            "value": "Te busco las 10 canciones que coicidan con la palabra clave que me des"
          },
          {
            "name": "-pause",
            "value": "Te pauso la cancion :D"
          },
          {
            "name": "-resume",
            "value": "Reanudo tu cancion :D"
          },
          {
            "name": "-queue",
            "value": "Te muestro la lista completa de las canciones en cola"
          },
          {
            "name": "-loop",
            "value": "Puedes poner la cancion, en loop {'solo una', 'repetir cola'}"
          },
          {
            "name": "-clear",
            "value": "Borra toda la cola que esté programada"
          },
          {
            "name": "-np",
            "value": "Te muestro lo que esté reproduciendo en el momento"
          }
        ]
      };
    message.channel.send({ embed });
}