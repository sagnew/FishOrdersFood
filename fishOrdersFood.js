var ordrin = require("ordrin-api"),
    fpp = require('./fpp'),
    possiblePizzas = require('./possiblePizzas'),
    orderDetails = require('./orderDetails'),
    ordrinApi = new ordrin.APIs('', ordrin.TEST),

    //TaTa's pizza rid
    rid = '24605',
    orderPizza = function(pizzaNum) {
        orderDetails.rid = rid;
        orderDetails.tray = possiblePizzas[pizzaNum].tray;
        ordrinApi.order_guest(orderDetails, function(error, data) {
            if(error) {
                console.log(error);
                process.exit(0);
            }

            console.log("You just ordered " + orderDetails.name);
            console.log(data);
        });
    };

fpp(orderPizza);
