module.exports = {

    champion_mastery:{
        masteryById: '/lol/champion-mastery/v4/champion-masteries/by-summoner/',
        masteryByIdByChampionId: '/by-champion/',
        scoreById: '/lol/champion-mastery/v4/scores/by-summoner/'
    },
    //Champion
    champion: {
        championList: '/lol/platform/v4/champions',
        championById: '/lol/platform/v4/champions/'
    },
    // Summoner api v4
    summoner: {
        summonerName: '/lol/summoner/v4/summoners/by-name/',
        summonerId: '/lol/summoner/v4/summoners/',
        accountId: '/lol/summoner/v4/summoners/by-account/',
        puuid: '/lol/summoner/v4/summoners/by-puuid/'
    },
    //League V4
    league: {
        bysummonerId: '/lol/league/v4/positions/by-summoner/',
        masterleagues: '/lol/league/v4/masterleagues/by-queue/',
        leagues: '/lol/league/v4/leagues/',
        challengerleagues: '/lol/league/v4/challengerleagues/by-queue/'
    },
    //LOL-STATUS-V4
    status: {
        shard_data: '/lol/status/v3/shard-data'
    },
    //MATCH-V4
    match: {
        matches: "/lol/match/v4/matches/",
        matchlists: "/lol/match/v4/matchlists/by-account/",
        timelines: '/lol/match/v4/timelines/by-match/',
        tournament: '/lol/match/v4/matches/by-tournament-code/',
        matchid_tournament: '/lol/match/v4/matches/'
    },
    //SPECTATOR-V4
    spectator: {
        activegames: '/lol/spectator/v4/active-games/by-summoner/',
        feactured: '/lol/spectator/v4/featured-games'
    }
}
