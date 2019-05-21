const endpoints = require('../../endpoint');
const got = require('got');
var api_url = ".api.riotgames.com";

module.exports = class status {
    constructor(api_key){
        this.api_key = api_key;
    }
    /**
     * 
     * @param {String} regionId Region
     * @returns {Promise<{name: String, region_tag: String, hostname: String, services: Array, slug: String, locales: Array}>}
     */
    async getCurrentGameInfoBySummoner (summonerId, regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.spectator.activegames + summonerId }`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
                json: true
            })
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
     */
    async getFeaturedGames (regionId) {
        return new Promise((resolve, reject) =>{
            got.get(`https://${regionId + api_url + endpoints.spectator.feactured}`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
                json: true
            })
            .then(data =>{
                resolve(data.body);
            })
            .catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        });
    }
}
