const Discord = require('discord.js');

const gestor = require('discord-gestor');

exports.run = (client, message, args, dg) => {
  
    gestor.perfil.verPerfil(message.author.id, (datos) => {
		const embed = new Discord.RichEmbed()
			.setAuthor('Perfil de: ' + message.author.username, message.author.displayAvatarURL)
			.setColor(0x00AE86)
			.addField('Soy', datos.titulo) //propiedad titulo del usuario.
			.addField('Nivel', datos.nivel, true) //propiedad nivel del usuario.
			.addField('Puntos', datos.puntos) //propiedad puntos del usuario.
			.setDescription('**Info:**\n' + datos.info) //propiedad info del usuario.
				
		message.channel.send(embed) 
		// Enviamos los datos retornados, en un mensaje de tipo embed
		// pero tambien puede usar un mensaje normal o el tipo de mensaje markdown.
	})

};