var express = require("express");
var router = express.Router();


process.env.LEAGUE_API_PLATFORM_ID = 'euw1'

const LeagueJS = require('LeagueJS');
const leagueJs = new LeagueJS("RGAPI-a79c1e84-c58b-4974-9787-e086f2ca1b22");

router.get("/", function(req, res, next) {
    res.send("funciona?");

});

router.get("/leaderboard", function(req, res, next) {
    leagueJs.League.gettingChallengerLeague("RANKED_SOLO_5x5","euw1").then(
        data => {
            res.send(data);
        }
    );

});



module.exports = router;