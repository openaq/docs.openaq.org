from openaq import OpenAQ

client = OpenAQ(api_key="YOUR-OPENAQ-API-KEY")
client.locations.list(coordinates=[136.90610, 35.14942], radius=12000, limit=1000)
client.close()
