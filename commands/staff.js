const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
     console.log(args);

    switch (args[0]) {
      case "k1":
        const embed = {
          "description": "Hice dos kills la ptm",
          "color": 9442302,
          "thumbnail": {
            "url": "https://cdn.discordapp.com/avatars/252240029936648192/1a5db5cd2cc1d0c8e4b6ec9ee74fab89.png?size=2048"
          },
          "author": {
            "name": "Juan Camilo",
            "icon_url": "https://cdn.discordapp.com/avatars/252240029936648192/1a5db5cd2cc1d0c8e4b6ec9ee74fab89.png?size=2048"
          }
        };
        await message.channel.send({embed});
        break;
      
      case "Mr":
        const embed2 = {
          "description": "Jueputa se me quedaron los cigarros",
          "color": 9442302,
          "thumbnail": {
            "url": "https://cdn.discordapp.com/avatars/552683940176068620/9dc8c60f59ce1a14d1742af93bf066cf.png?size=2048"
          },
          "author": {
            "name": "MANUEL",
            "icon_url": "https://cdn.discordapp.com/avatars/552683940176068620/9dc8c60f59ce1a14d1742af93bf066cf.png?size=2048"
          }
        };
        await message.channel.send({embed2});
        break;

      case "beleño":
        const embed3 = {
          "description": "HTML IS A LENGUAJE",
          "color": 9442302,
          "thumbnail": {
            "url": "https://cdn.discordapp.com/avatars/412786369983807509/3ce2bc423762a8d52ca7cdeab0316635.png?size=2048"
          },
          "author": {
            "name": "Sebastian Beleño",
            "icon_url": "https://cdn.discordapp.com/avatars/412786369983807509/3ce2bc423762a8d52ca7cdeab0316635.png?size=2048"
          }
        };
        await message.channel.send({embed3});
        break;

      default:
        await message.channel.send("Debes indicar el staff, -staff [beleño,k1,manuel,rivera,Mr]");
        break;
    }

}