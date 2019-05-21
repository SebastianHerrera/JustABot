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
    async getShardData (regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.status.shard_data}`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
                json: true
            })
            .then(data =>{
                var body = data.body;
                resolve({
                    name: body.name,
                    region_tag: body.region_tag,
                    hostname: body.hostname,
                    services: body.services,
                    slug: body.slug,
                    locales: body.locales
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
