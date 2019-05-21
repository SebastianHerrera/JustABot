const {DDragon, Pyke} = require('../main');

const data = new DDragon();
data.DDragon.getRuneList({
    version: "7.23.1"
}).then(console.log).catch(console.log)
