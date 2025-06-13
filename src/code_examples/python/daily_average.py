from openaq import OpenAQ

client = OpenAQ(api_key="YOUR-OPENAQ-API-KEY")
client.measurements.list(sensors_id=3917, data="days", limit=1000)
client.close()
