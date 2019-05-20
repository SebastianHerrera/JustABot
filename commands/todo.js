const Discord = module.require("discord.js");


module.exports.run = async (client, message, args) => {
    const embed = {
        "title": "TODO",
        "description": "Esta es la lista de cosas que hay por hacer para el bot D: (Beleño es un vago y se le olvidan las cosas xd)",
        "color": 2062905,
        "timestamp": "2019-05-20T04:03:23.081Z",
        "footer": {
          "text": "Sebastian Beleño"
        },
        "fields": [
          {
            "name": "NSFW",
            "value": "Agregar la funcionalidad  7u7",
            "inline": true
          },
          {
            "name": "RIOT API<:thonkang:219069250692841473>",
            "value": "Ver las stats de lol desde el bot",
            "inline": true
          },
          {
            "name": "Documentacion",
            "value": "Agregar la documentacion en github",
            "inline": true
          },
          {
            "name": "Ortografia",
            "value": "Pedirle a k1 que mejore la ortograficaD",
            "inline": true
          },
          {
            "name": "Mensajes aleatorios",
            "value": "Mensajes de bienvenida al server ",
            "inline": true
          },
          {
            "name": "Recordar",
            "value": "Machine learning para recordar cosas ",
            "inline": true
          }
        ]
      };
    message.channel.send("Cosas por hacer!", { embed });
}