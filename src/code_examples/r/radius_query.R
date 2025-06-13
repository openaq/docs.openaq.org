library("openaq")

set_api_key("YOUR-OPENAQ-API-KEY")

list_locations(
  coordinates = c(latitude = 35.14942, longitude = 136.90610),
  radius = 12000,
  limit = 1000
)