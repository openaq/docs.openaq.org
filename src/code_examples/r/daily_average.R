library("openaq")

set_api_key("YOUR-OPENAQ-API-KEY")

list_sensor_measurements(
  3917,
  data = 'days',
  limit = 1000
)