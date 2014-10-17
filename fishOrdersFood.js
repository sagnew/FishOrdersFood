var ordrin = require("ordrin-api"),
    possiblePizzas = require('./possiblePizzas'),
    orderDetails = require('./orderDetails'),
    ordrinApi = new ordrin.APIs('api_key', ordrin.TEST),

    //TaTa's pizza rid
    rid = '24605';

orderDetails.rid = rid;
orderDetails.tray = possiblePizzas[0].tray;
ordrinApi.order_guest(orderDetails, function(error, data) {
    if(error) {
        console.log(error);
        process.exit(0);
    }

    console.log(data);
});
