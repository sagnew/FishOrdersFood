var ordrin = require("ordrin-api"),
    fpp = require('./fpp'),
    possiblePizzas = require('./possiblePizzas'),
    orderDetails = require('./orderDetails'),
    ordrinApi = new ordrin.APIs('orqweJcnpgD4mxVRPKRTGAVbTGab33DlqqEDllP4Bck', ordrin.TEST),

    //TaTa's pizza rid
    rid = '24605',
    orderPizzas = function(pizzaNum) {
      orderDetails.rid = rid;
      pizza = possiblePizzas[pizzaNum];
      orderDetails.tray = pizza.tray;
      ordrinApi.order_guest(orderDetails, function(err, data) {
        if(err) {
          console.log(err);
        }

        console.log('You just ordered ' + pizza.name);
        console.log(data);
      });
    };

fpp(orderPizzas);
