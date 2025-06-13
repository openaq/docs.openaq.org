library("openaq")

set_api_key("YOUR-OPENAQ-API-KEY")

list_locations(
  bbox = c(
    xmin = -118.668153,
    ymin = 33.703935,
    xmax = -118.155358,
    ymax = 34.337306
  ),
  limit = 1000
)