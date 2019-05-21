const Discord = module.require("discord.js");


const {Pyke} = require('pyke');
const  pyke_api = new Pyke('RGAPI-0f39f2a6-4f62-4722-add8-2d1327b72961', 10000);// (10 seconds maxAge)

module.exports.run =  (client, message, args) => {
 
    if (args.length > 1) {
        
        var username = args[0]+ " " +args[1];
    }else{
        var username = args[0];
    }

    var regionID = "la1";


    pyke_api.summoner.getBySummonerName(username, regionID)
    .then((summoner) => {
        pyke_api.league.getAllLeaguePositionsForSummoner(summoner.id, "la1")
        .then((league) => {
            if (league.RANKED_SOLO_5x5.tier == "Unranked") {
                const embed = {
                    "title": `${summoner.name}`,
                    "description": "Estas son algunas estadisticas, pronto agregaré más.",
                    "color": 9442302,
                    "footer": {
                      "icon_url": `${summoner.profileIconUrl}`,
                      "text": `${summoner.name}`,
                    },
                    "image": {
                      "url": `${summoner.profileIconUrl}`
                    },
                    "fields": [
                      {
                        "name": "El invocador no tiene tier :(",
                        "value": `Juega con el, depronto asi consigue su apreciado Madera II`,
                        "inline": true
                      }
                    ]
                  };
                  message.channel.send({ embed })
            }else{
                const embed = {
                    "title": `${summoner.name}`,
                    "description": "Estas son algunas estadisticas, pronto agregaré más.",
                    "color": 9442302,
                    "footer": {
                      "icon_url": `${summoner.profileIconUrl}`,
                      "text": `${summoner.name}`,
                    },
                    "image": {
                      "url": `${summoner.profileIconUrl}`
                    },
                    "fields": [
                      {
                        "name": "Victorias",
                        "value": `${league.RANKED_SOLO_5x5.wins}`,
                        "inline": true
                      },
                      {
                        "name": "Derrotas",
                        "value": `${league.RANKED_SOLO_5x5.losses}`,
                        "inline": true
                      },
                      {
                        "name": "Liga",
                        "value":  `${league.RANKED_SOLO_5x5.tier}`,
                        "inline": true
                      }
                    ]
                  };
                  message.channel.send({ embed })
            }
            console.log(league)
           
        }).catch((err) => {
            console.error(err)
        });
    }).catch((err) => {
        console.error(err)
    });
 
}