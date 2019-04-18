const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
     console.log(args);

    switch (args[0]) {
      case "k1":
        await message.channel.send("Esté es el mensaje personalizado de @Kaguama");
        break;
    
      default:
        break;
    }

}