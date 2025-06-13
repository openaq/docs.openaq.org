from openaq import OpenAQ

client = OpenAQ(api_key="YOUR-OPENAQ-API-KEY")
client.locations.list(bbox=[-118.668153, 33.703935, -118.155358, 34.337306], limit=1000)
client.close()
