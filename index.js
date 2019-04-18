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

  

    // The list of if/else is replaced with those simple 2 lines:

    //Buscamos dentro de la carpeta el comando que el usuario ingresó. Concatenando
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      message.channel.send("No contré el comando. Puedes ver la lista usando el comando '-comandos'");
    }

});

client.login(config.token);