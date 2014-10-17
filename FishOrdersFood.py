import ordrin
from possible_pizzas import possible_pizzas
from order_details import order_details

ordrin_api = ordrin.APIs('API_key_goes_here', ordrin.TEST)

# Restaurant ID of Tata's pizzas in New Brunswick
tatas_rid = '24605'

order_details['rid'] = tatas_rid
order_details['tray'] = possible_pizzas[0]['tray']

order_response = ordrin_api.order_guest(**order_details)
print order_response
