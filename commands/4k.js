const Discord = module.require("discord.js");
const request = require('snekfetch');
const fs = require("fs")
const randomPuppy = require('random-puppy');


module.exports.run = async (client, message, args) => {
    if (!message.channel.nsfw) return   message.channel.send(":underage: Hey! No puedes usar este comando fuera del canal nsfw. Para cochinadas, por favor ve a el.")

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]


    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    
    randomPuppy(sub)
    .then(url => {
        request.get(url).then(r => {
            fs.writeFile(`4k.jpg`, r.body)
            message.channel.sendFile(r.body)
            fs.unlink(`./4k.jpg`)
        })
    })
}