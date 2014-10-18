var ordrin = require("ordrin-api"),
    fpp = require('./fpp'),
    possiblePizzas = require('./possiblePizzas'),
    orderDetails = require('./orderDetails'),
    express = require('express'),
    app = express(),
    ordrinApi = new ordrin.APIs('orqweJcnpgD4mxVRPKRTGAVbTGab33DlqqEDllP4Bck', ordrin.TEST),

    //TaTa's pizza rid
    rid = '24605',
    orderPizzas = function(pizzaNum, res) {
      orderDetails.rid = rid;
      pizza = possiblePizzas[pizzaNum];
      orderDetails.tray = pizza.tray;
      ordrinApi.order_guest(orderDetails, function(err, data) {
        if(err) {
          console.log(err);
        }

        res.send('Just ordered ' + pizza.name);
        console.log('You just ordered ' + pizza.name);
        console.log(data);
      });
    };

app.get('/', function(req, res) {
  fpp(orderPizzas, res);
});
app.listen(5999);
console.log('Listening on port 5999');
