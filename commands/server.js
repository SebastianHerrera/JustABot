const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    var server = message.guild;
    
    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('Nuestro ID:', server.id, true)
    .addField('Comos de:', server.region, true)
    .addField('Cumplimos años:', server.joinedAt.toDateString(), true)
    .addField('El putas de putas es:', server.owner.user.username, true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0x66b3ff)
    
    await  message.channel.send({ embed });

}