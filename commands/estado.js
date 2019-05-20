const Discord = module.require("discord.js");

var devStatus = true;

module.exports.run = async (client, message, args) => {
     ///En caso de que el BOT esté en modo de desarrolo
    if (devStatus) {
        const embed = {
            "title": "EL BOT ESTÁ EN MODO DE DESARROLLO",
            "description": "Se está desarrollando nuevas carácteristicas al bot o solucionando algunos bugs, y por tanto no deberia de ser usado.",
            "color": 13632027,
            "timestamp": "2019-04-17T01:44:57.951Z",
            "footer": {
              "icon_url": "https://i.imgur.com/tGKDeCQ.jpg",
              "text": "Bot by: Sebastian Beleño"
            },
            "author": {
              "name": "Sebastian Beleño",
              "url": "https://sebasbeleno.000webhostapp.com/",
              "icon_url": "https://i.imgur.com/tGKDeCQ.jpg"
            }
          };
          message.channel.send({ embed });
    }else{
        const embed = {
            "title": "BOT DISPONIBLE",
            "description": "El bot está en su versión mas reciente '1,3' y está abierto para el uso publico :D",
            "color": 8311585,
            "timestamp": "2019-04-17T01:44:57.951Z",
            "footer": {
              "icon_url": "https://i.imgur.com/tGKDeCQ.jpg",
              "text": "Bot by: Sebastian Beleño"
            },
            "author": {
              "name": "Sebastian Beleño",
              "url": "https://sebasbeleno.000webhostapp.com/",
              "icon_url": "https://i.imgur.com/tGKDeCQ.jpg"
            }
          };
          message.channel.send({ embed });
    }

}
