---
title: Best practices
---

When using the OpenAQ API, adhering to best practices is key to efficiently retrieving the data you need. One of the most important practices is to be as specific as possible with your API queries. This means clearly defining the type of data you're interested in, such as specifying the pollutant type, geographic location, and time period. By narrowing down these parameters, you ensure that the API returns only the most relevant data, making your queries more focused and easier to manage.

Limiting the scope of your queries not only helps you retrieve exactly what you need but also optimizes the API's performance. By reducing the amount of unnecessary data returned, you can conserve bandwidth and improve the speed of your queries. This approach is particularly useful when dealing with large datasets, where retrieving only the essential information can significantly reduce processing time. Additionally, leveraging HTTP status codes as part of your workflow can help you identify issues quickly.

To further enhance the efficiency of your queries, make use of the `limit` and `page` query parameters. The `limit` parameter allows you to control the number of results returned per request, while the `page` parameter helps you paginate through large datasets. By combining these tools, you can systematically access large volumes of data in smaller, more manageable portions, ensuring that your requests are both effective and resource-efficient.

It is also important to be mindful of rate limiting to ensure smooth and uninterrupted access to data. The API enforces rate limits to prevent overloading the system with too many requests in a short period. Exceeding these limits will result in receiving an HTTP 429 status code, indicating "Too Many Requests." To avoid this, monitor the rate limit headers provided in the API responses, such as `x-ratelimit-used`, `x-ratelimit-remaining`, and `x-ratelimit-reset`. These headers give you insights into your current usage and help you plan your request strategy accordingly. Being aware of these limits and managing your requests effectively will allow you to stay within the permitted thresholds and maintain consistent access to the API.

