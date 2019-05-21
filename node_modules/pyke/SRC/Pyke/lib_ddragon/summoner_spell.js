var summoner_spell = {};
var i, y, nom;

async function data_summoner_spell_id(summoner_spell_json) {
    return new Promise(async (resolve, reject) =>{
        try {
            var keys = Object.keys(summoner_spell_json.data);
            for (i = 0; i < keys.length; i++) {
                y = i;
                nom = keys[y--];
                summoner_spell[summoner_spell_json.data[nom].key] = summoner_spell_json.data[nom];
            }
            resolve(summoner_spell);
        } catch (error) {
            reject(error)
        }
    })
};

module.exports = data_summoner_spell_id;