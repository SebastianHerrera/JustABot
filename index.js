const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
    // Este es el evento que se ejecuta cuando el bot es iniciado con exito
    console.log(`Bot iniciado, con ${client.users.size} usuarios, en ${client.channels.size} canales de ${client.guilds.size} servers.`); 
    // Cambiar la actividad del bot, en el mommento que se  ejecuta
    client.user.setActivity(`Para llamarme usa "-"`);
});

client.on("guildCreate", guild => {
    // Este envento se ejecuta cuando el bot se une en un nuevo servidor, "guildCreate"
    console.log(`Me he unido a un nuevo sv: ${guild.name} (id: ${guild.id}). Cuenta con ${guild.memberCount} Miembros!`);
    //client.user.setActivity(`Serving ${client.guilds.size} servers`);
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
        m.edit(`Pong! La latencia es de ${m.createdTimestamp - message.createdTimestamp}ms, La latencia de la API es de: ${Math.round(client.ping)}ms`);
    
    }
});

client.login(config.token);