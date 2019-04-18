const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    const deleteCount = parseInt(args[0], 10);

    if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
        return message.reply("Por davor indique un numero de 2 a 100, que serán los mensajes que desea eliminar");
    }
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});

    await  message.channel.bulkDelete(fetched).catch(error => message.reply(`No pude eliminar los mensajes, porque: ${error}`));

}
