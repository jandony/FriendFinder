// Load Data
var friendsArray = require('../data/friends');

// ROUTES =======================================

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        if (friendsArray.length) {
            friendsArray.push(req.body);
            res.json(true);
        }
    });

};