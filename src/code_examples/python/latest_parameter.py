from openaq import OpenAQ

client = OpenAQ(api_key="YOUR-OPENAQ-API-KEY")
client.parameters.latest(parameters_id=2, limit=1000)
client.close()
