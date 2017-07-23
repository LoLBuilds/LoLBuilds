const fetch = require('node-fetch');
const riotApi       = require("riot-api-nodejs");
var classicApi      = new riotApi.ClassicApi(["RGAPI-f34c1742-86f7-43a4-bf48-d6fd0813fb28s"], riotApi.region_e.NA);

var tournamentAPI   = new riotApi.TournamentAPI("RGAPI-f34c1742-86f7-43a4-bf48-d6fd0813fb28s");

classicApi.getChampions('Ashe')
