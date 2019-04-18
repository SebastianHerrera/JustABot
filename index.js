const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

client.music = require('discord.js-musicbot-addon');


client.music.start(client, {
  // Set the api key used for YouTube.
  // This is required to run the bot.
  youtubeKey: "AIzaSyCjkT1GUWTjyN_eXlBKwIB6z_gnDKPyHdU",


  // Make it so anyone in the voice channel can skip the
  // currently playing song.
  anyoneCanSkip: true,
});


//Esta variable sirve para identificar en que modo está el BOT  
//TRUE: EL bot está en modo desarrolador, y se les aleta a los usarios del server
//FALSE: El bot está disponible, y es libre para todo publico
var devStatus = true;



client.on("ready", () => {
    // Este es el evento que se ejecuta cuando el bot es iniciado con exito
    console.log(`Bot iniciado, con ${client.users.size} usuarios, en ${client.channels.size} canales de ${client.guilds.size} servers.`); 
    // Cambiar la actividad del bot, en el mommento que se  ejecuta
    client.user.setActivity(`Para llamarme usa "-"`);


    if (devStatus) {
      client.user.setActivity(`MODO DESARROLADOR`);
    }
});



client.on("guildCreate", guild => {
    // Este envento se ejecuta cuando el bot se une en un nuevo servidor, "guildCreate"
    console.log(`Me he unido a un nuevo sv: ${guild.name} (id: ${guild.id}). Cuenta con ${guild.memberCount} Miembros!`);
    //client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

//EL MALDITO MENSAJE DE Mr.RX2kayer 
//NO LO VOY A EXPLICAR, COMAN KK >:c
client.on('guildMemberAdd', member => {
    member.guild.channels.get('536955514559397899').send(`Bienvenido al server! ${member.user}, Por favor revisa las reglas antes de continuar. Nos vamos ;)`); 
});
client.on("message", async message =>{


    var mensaje = true;
    
    //Ignora todos los mensaje provenientes de un bot, incluyendolo
    //Esto para evitar los "botception's"
    if(message.author.bot) return;

    //Ignora todos los mensajes que no contengan nuestro pefijo
    //EN este caso nuestro pefijo es "-"
    if(message.content.indexOf(config.prefix) !== 0){
        //console.log("Mensaje ignorado")
        return;
    }else{
        //EN caso de que el mensaje si contenga el prefijo
        console.log("Mensaje resivido");
    }
    
    //Dividimos el mensaje en dos, la orden y los parametros.

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "ping") {
        // Esto sirve para medir la latencia del bot, con respecto al servidor, al mommento de decirle "Ping" el responderá con un "Ping?".
        // & por ulrimo edita el anterior mensaje con un "Pong", mostrando la latencia entre los dos. 
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! La latencia es de ${m.createdTimestamp - message.createdTimestamp}ms, La latencia de la API es de: ${Math.round(client.ping)}ms.`);

        mensaje = false;
    }

    //Verificar el estado del BOT
    if (command === "stado") {
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
                "thumbnail": {
                  "url": "https://cdn3.iconfinder.com/data/icons/chat-bot-glyph-silhouettes-1/300/14119905Untitled-3-512.png"
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
                "description": "El bot está en su versión mas reciente '1,2' y está abierto para el uso publico :D",
                "color": 8311585,
                "timestamp": "2019-04-17T01:44:57.951Z",
                "footer": {
                  "icon_url": "https://i.imgur.com/tGKDeCQ.jpg",
                  "text": "Bot by: Sebastian Beleño"
                },
                "thumbnail": {
                  "url": "https://cdn3.iconfinder.com/data/icons/chat-bot-glyph-silhouettes-1/300/14119905Untitled-3-512.png"
                },
                "author": {
                  "name": "Sebastian Beleño",
                  "url": "https://sebasbeleno.000webhostapp.com/",
                  "icon_url": "https://i.imgur.com/tGKDeCQ.jpg"
                }
              };
              message.channel.send({ embed });
        }

        mensaje = false;
    }   

    //Borra los mensajes en un numero expecifico dado por el usuario
    if (command === "purga") {
        
        const deleteCount = parseInt(args[0], 10);

        if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
            return message.reply("Por davor indique un numero de 2 a 100, que serán los mensajes que desea eliminar");
        }
        
        const fetched = await message.channel.fetchMessages({limit: deleteCount});

        message.channel.bulkDelete(fetched).catch(error => message.reply(`No pude eliminar los mensajes, porque: ${error}`));


        mensaje = false;
    }


    if (command === 'avatar') {
        let img = message.mentions.users.first()
        if (!img) {

            const embed = new Discord.RichEmbed()
            .setImage(`${message.author.avatarURL}`)
            .setColor(0x66b3ff)
            .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
            message.channel.send({ embed });

        } else if (img.avatarURL === null) {

            message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

        } else {

            const embed = new Discord.RichEmbed()
            .setImage(`${img.avatarURL}`)
            .setColor(0x66b3ff)
            .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
            message.channel.send({ embed });

        };
        mensaje = false;
    }


    if (command === "comandos") {
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
      message.channel.send({ embed });
      mensaje = false;

      console.log("im here");
    }

    if (command === "staff") {

      console.log(args);

      switch (args[0]) {
        case "k1":
          message.channel.send("Esté es el mensaje personalizado de @Kaguama");
          break;
      
        default:
          break;
      }

      mensaje = false;
    }

    if (command === "server") {
        
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
      
      message.channel.send({ embed });

      mensaje = false;
    }

    if (mensaje) {
      message.channel.send("No he reconocido tu mensaje, fuck up. Para ver la lista de mensaje usa '-comandos'");
    }


  
});

client.login(config.token);