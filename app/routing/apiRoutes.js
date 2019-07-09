// Load Data
var friendsArray = require('../data/friends');

// ROUTES =======================================

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        var currUser = req.body;
        var currUserScores = currUser.scores;
        var bestMatch = {
            name: "",
            photo: "",
            diff: 1000
        };

        var totalDiff = 0;
        
        for (var i = 0; i < friendsArray.length; i++) {
            var thisFriend = friendsArray[i];
            totalDiff = 0;

            for (var j = 0; j < currUserScores.length; j++) {
                var friendScores = thisFriend.scores;
                totalDiff += Math.abs(parseInt(friendScores[j]) - parseInt(currUserScores[j]));
            }

            if (totalDiff < bestMatch.diff) {
                bestMatch.name = thisFriend.name;
                bestMatch.photo = thisFriend.photo;
                bestMatch.diff = totalDiff;
            }
        }

        friendsArray.push(currUser);
        res.json({
            matchName: bestMatch.name,
            matchPhoto: bestMatch.photo
        });
    });

};