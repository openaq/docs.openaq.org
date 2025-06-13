library("openaq")

set_api_key("YOUR-OPENAQ-API-KEY")

list_parameter_latest(
  2,
  limit = 1000
)