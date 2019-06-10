const Discord = require('discord.js');

const gestor = require('discord-gestor');

exports.run = (client, message, args, dg) => {
  
    gestor.perfil.verPerfil(message.author.id, (datos) => {
		const embed = new Discord.RichEmbed()
			.setAuthor('Estadisticas de: ' + message.author.username, message.author.displayAvatarURL)
			.setColor(0x00AE86)
			.addField('Nivel', datos.nivel, true) 
			.addField('Porcentaje', datos.porcNivel+ '%', true) //propiedad porcNivel del usuario
			.addField('Exp', datos.sigNivel + ' **(Total: ' + datos.puntos + ')**', true) //propiedad sigNivel del usuario
		
		message.channel.send(embed) // enviamos los datos en un mensaje de tipo embed
	})
};