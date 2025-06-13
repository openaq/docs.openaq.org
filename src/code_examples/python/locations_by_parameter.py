from openaq import OpenAQ

client = OpenAQ(api_key="YOUR-OPENAQ-API-KEY")
client.locations.list(parameters_id=2, limit=1000)
client.close()
