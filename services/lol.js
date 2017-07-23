const fetch         = require('node-fetch');
const API_KEY       = process.env.LOL_API_KEY;

function getFreeChamps(req, res, next) {
  fetch(`https://na1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=true&api_key=RGAPI-dd587e85-dd48-4390-af89-18b4a25d86a3`)
  .then(r => r.json())
  .then((data) => {
    console.log(data);
    res.free = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    res.err = err;
    next();
  });
}

function getChamps(req, res, next) {
  fetch('https://na1.api.riotgames.com/lol/static-data/v3/champions/${req.params.championsID}?locale=en_US&api_key=RGAPI-dd587e85-dd48-4390-af89-18b4a25d86a3')
  .then(r => r.json())
  .then((data) => {
    console.log(data);
    res.free = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    res.err = err;
    next();
  });
}

module.exports = { getFreeChamps, getChamps };


