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
     * @param {String} matchId Match
     * 
     */
    async getMatch (matchId, regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.match.matches + matchId}`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
                json: true
            })
            .then(data =>{
                var body = data.body;
                resolve(body)
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
     * @param {String} accountId accountId
     * @param {JSON} opts {endTime: String, beginIndex: String, beginTime: String, champion: String, endIndex: String, queue: String, season = String}
     */
    async getMatchlist (accountId, regionId, opts){
        if (!opts) opts = {
            endTime: '', 
            beginIndex: '', 
            beginTime: '', 
            champion: '', 
            endIndex: '', 
            queue: '', 
            season: ''
        }
        return new Promise ((resolve, reject) =>{
             got.get(`https://${regionId + api_url + endpoints.match.matchlists + accountId }`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
                json: true,
                query:{
                    endTime: opts.endTime,
                    beginIndex: opts.beginIndex,
                    beginTime: opts.beginTime,
                    champion: opts.champion,
                    endIndex: opts.endIndex,
                    queue: opts.queue,
                    season: opts.season
                }
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
     * @param {String} accountId accountId
     * @param {String} matchId Match
     */
    async getMatchlistRecent (accountId, regionId) {
        console.warn('Recent is not an Endpoints official but I is created by endIndex, next time used getMatchlist()');
        return new Promise ((resolve, reject) =>{
            got.get(`https://${regionId + api_url + endpoints.match.matchlists + accountId }`, {
                headers:{
                    "X-Riot-Token": this.api_key
                },
                json: true,
                query:{
                    endIndex: 20
                }
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
     * @param {String} matchId Match
     * @returns {Promise<{frameInterval: String, frames: Array}>}
     */
    async getMatchTimeline (regionId, matchId) {
        return new Promise ((resolve, reject) =>{
             got.get(`https://${regionId + api_url + endpoints.match.timelines + matchId}`,{
                headers:{
                    "X-Riot-Token": this.api_key
                },
                json: true
            })
            .then(data =>{
                var body = data.body;
                resolve({
                    frameInterval: body.frameInterval,
                    frames: body.frames
                })
            })
            .catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        });
    }
    /**
     * 
     * @param {String} regionId Region
     * @param {String} tournamentCode tournamentCode
     * @returns {Promise<{}>}
     */
    async getMatchIdsByTournamentCode (regionId, tournamentCode) {
        return new Promise((resolve, reject) =>{
            got.get(`https://${regionId + api_url + endpoints.match.tournament + tournamentCode + '/ids'}`,{
            headers:{
                "X-Riot-Token": this.api_key
            },
            json: true
            })
            .then(data =>{
                resolve(data.body)
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
     * @param {String} matchId Match Id
     * @param {String} tournamentCode tournamentCode
     * @returns {Promise<{}>}
     */
    async getMatchByTournamentCode (regionId, matchId, tournamentCode) {
        return new Promise((resolve, reject) =>{
          got.get(`https://${regionId + api_url + endpoints.match.tournament + matchId + endpoints.match.matchid_tournament + tournamentCode}`,{
            headers:{
                "X-Riot-Token": this.api_key
            },
            json: true
        })
        .then(data =>{
            resolve(data.body)
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
