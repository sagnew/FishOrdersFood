var request = require('request');

module.exports = function(callback, res) {
    request.get('http://api.fishplayspokemon.com/position', function(err, data ) {
        if(err) {
            console.log(err);
        }
        console.log(data.body);

        var pizzaNum;
        if(data.body.x > 50 && data.body.y > 50) {
            console.log(0);
            pizzaNum = 0;
        } else if(data.body.x < 50 && data.body.y < 50) {
            console.log(1);
            pizzaNum = 1;
        } else if(data.body.x < 50 && data.body.y > 50) {
            console.log(2);
            pizzaNum = 2;
        } else {
            console.log(3);
            pizzaNum = 3;
        }
        callback(pizzaNum, res);
    });
};
