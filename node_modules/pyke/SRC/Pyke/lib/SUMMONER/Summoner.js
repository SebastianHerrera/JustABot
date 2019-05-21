const endpoints = require('../../endpoint');
const got = require('got');
var api_url = ".api.riotgames.com";
    //coverage 100%
module.exports = class Summoner {
    constructor(api_key){
        this.api_key = api_key;
    }
    /**
     * 
     * @param {String} summonerName Nom de l'invocateur
     * @param {String} regionId Region
     * @returns {Promise<{id: String, accountId: String, summonerLevel: String, profileIconId: String, profileIconUrl: String, name: String}>}
     */
    async getBySummonerName(summonerName, regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.summoner.summonerName + encodeURIComponent(summonerName)}`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
               json: true,
            }).then(data => {
                var body = data.body;
                resolve({
                    id: body.id,
                    accountId: body.accountId,
                    summonerLevel: body.summonerLevel,
                    profileIconId: body.profileIconId,
                    profileIconUrl: `https://avatar.leagueoflegends.com/${regionId}/${encodeURIComponent(summonerName)}.png`,
                    name: body.name,
                    puuid: body.puuid
                });
            }).catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    }
    /**
     * 
     * @param {String} summonerId Id de l'invocateur
     * @param {String} regionId Region
     * @returns {Promise<{id: String, accountId: String, summonerLevel: String, profileIconId: String, profileIconUrl: String, name: String}>}
     */
    async getBySummonerId(summonerId, regionId) {
        return new Promise(async (resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.summoner.summonerId + summonerId}`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
               json: true,
            }).then(data => {
                var body = data.body;
                resolve({
                    id: body.id,
                    accountId: body.accountId,
                    summonerLevel: body.summonerLevel,
                    profileIconId: body.profileIconId,
                    name: body.name,
                    profileIconUrl: `https://avatar.leagueoflegends.com/${regionId}/${encodeURIComponent(body.name)}.png`,
                    puuid: body.puuid
                });
            }).catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    }
    
    async getByPUUID(puuid, regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.summoner.puuid + puuid}`,  {
                headers:{
                    "X-Riot-Token": this.api_key
                },
               json: true,
            }).then(data => {
                var body = data.body;
                resolve({
                    id: body.id,
                    accountId: body.accountId,
                    summonerLevel: body.summonerLevel,
                    profileIconId: body.profileIconId,
                    name: body.name,
                    profileIconUrl: `https://avatar.leagueoflegends.com/${regionId}/${encodeURIComponent(body.name)}.png`,
                    puuid: body.puuid
                });
            }).catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    }
    /**
     * 
     * @param {String} accountId AccountId de l'invocateur
     * @param {String} regionId Region
     * @returns {Promise<{id: String, accountId: String, summonerLevel: String, profileIconId: String, profileIconUrl: String, name: String}>}
     */
    async getByAccountId(accountId, regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.summoner.accountId + accountId}`,  {
                headers:{
                    "X-Riot-Token": this.api_key
                },
               json: true,
            }).then(data => {
                var body = data.body;
                resolve({
                    id: body.id,
                    accountId: body.accountId,
                    summonerLevel: body.summonerLevel,
                    profileIconId: body.profileIconId,
                    name: body.name,
                    profileIconUrl: `https://avatar.leagueoflegends.com/${regionId}/${encodeURIComponent(body.name)}.png`,
                    puuid: body.puuid
                });
            }).catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    }
}
