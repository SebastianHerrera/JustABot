const endpoints = require('../../endpoint');
const got = require('got');
var api_url = ".api.riotgames.com";
// Coverage 100%

module.exports = class champion {
    constructor(api_key){
        this.api_key = api_key;
    }
    /**
     * 
     * @param {String} regionId Region
     * @param {String} championId Champion ID
     * @returns {Promise<{}>}
     */
    async getChampions(regionId, freeToPlay){
        return new Promise((resolve, reject) =>{
            if (freeToPlay !== true) freeToPlay = false;
            got.get(`https://${regionId + api_url + endpoints.champion.championList + '?freeToPlay=' + freeToPlay + '&api_key=' + this.api_key}`, {json :true})
                .then(data =>{
                    resolve(data.body);
                })
                .catch(error => {
                    reject({
                        statuscode: error.statusCode,
                        message: error.statusMessage
                    });
                })
        })
    }
    /**
     * 
     * @param {String} regionId Region
     * @param {String} championId Champion ID
     * @returns {Promise<{rankedPlayEnabled: boolean, botEnabled: boolean, botMmEnabled: String, active: String, freeToPlay: String, id: String}>}
     */
    async getChampionsById(regionId, championId) {
        return new Promise((resolve, reject) =>{
            if (!championId) reject({
                statuscode: "403",
                message: "Forbidden"
            });

            got.get(`https://${regionId + api_url + endpoints.champion.championById + championId + '?api_key=' + this.api_key}`,{json : true})
                .then(data =>{
                    var body = data.body;
                    resolve({
                        rankedPlayEnabled: body.rankedPlayEnabled,
                        botEnabled: body.botEnabled,
                        botMmEnabled: body.botMmEnabled,
                        active: body.active,
                        freeToPlay: body.freeToPlay,
                        id: body.id
                    })
                })
                .catch(error => {
                    reject({
                        statuscode: error.statusCode,
                        message: error.statusMessage
                    });
                })
        })
    }
}
