library("openaq")

set_api_key("YOUR-OPENAQ-API-KEY")

locations <- list_locations(
    parameters_id = 2, 
    radius = 10000
)