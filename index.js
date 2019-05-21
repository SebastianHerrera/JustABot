const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');


const config = require("./config/config.json");

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
var devStatus = false



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
  
    let img = member.user.avatarURL;
    const embed = {
      "title": `Welcome Stranger,  ${member.user.username}!`,
      "description": " en este servidor podrás encontrar variedad y gente amable para jugar. Pasate por #comunidad y has nuevos amigos.",
      "color": 9442302,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
        "text": "Con amor, Beleño <3"
      },
      "thumbnail": {
        "url": `${member.user.avatarURL}`
      }
    };


    console.log(`${member.user.avatarURL}`);

    member.guild.channels.get('536955514559397899').send({ embed }); 
    
  });
client.on("message", async message =>{

    if(message.author.bot) return;


    if(message.content.indexOf(config.prefix) !== 0){
        //console.log("Mensaje ignorado")
        return;
    }
    
   
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


      try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
      } catch (err) {
        console.log(err)
      }
    

  

    
});

/*Depuracion*/ 
client.on("error", (e) => console.error(chalk.gray(e)));
client.on("warn", (e) => console.warn(chalk.gray(e)));
client.on("debug", (e) => console.info(chalk.gray(e)));


client.login(config.token);
