const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

//Esta variable sirve para identificar en que modo está el BOT  
//TRUE: EL bot está en modo desarrolador, y se les aleta a los usarios del server
//FALSE: El bot está disponible, y es libre para todo publico
var devStatus = false;



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
    }   

    //Borra los mensajes en un numero expecifico dado por el usuario
    if (command === "purga") {
        
        const deleteCount = parseInt(args[0], 10);

        if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
            return message.reply("Por davor indique un numero de 2 a 100, que serán los mensajes que desea eliminar");
        }
        
        const fetched = await message.channel.fetchMessages({limit: deleteCount});

        message.channel.bulkDelete(fetched).catch(error => message.reply(`No pude eliminar los mensajes, porque: ${error}`));

    }


    if (command === 'avatar') {
        if (!message.mentions.users.size) {


            return embed = {
                "color": 3824210,
                "footer": {
                  "icon_url": `${message.author.displayAvatarURL}`,
                  "text": `La persona que pidió el avatar es: ${message.author.tag}`
                },
                "image": {
                  "url": `${message.author.displayAvatarURL}`
                }
            };

            message.channel.send({ embed });
        }

       
        const avatarList = message.mentions.users.map(user => {

            return embed = {
                "color": 3824210,
                "footer": {
                  "icon_url": `${message.author.displayAvatarURL}`,
                  "text": `La persona que pidió el avatar es: ${message.author.tag}`
                },
                "image": {
                  "url": `${user.displayAvatarURL}`
                }
              };
             
            
        });

        message.channel.send({ embed });
       
    }



});

client.login(config.token);