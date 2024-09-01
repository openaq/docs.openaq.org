---
title: Rate limits
---

OpenAQ limits the number of API requests you can make in a set time to ensure
fair access for all users and prevent overuse.

If you exceed this limit, you will receive a 429 HTTP status code indicating
“Too Many Requests.” To continue, wait until the next rate limit period starts
as described in OpenAQ’s rate limit policy. Avoid making more requests during
this time to prevent further errors.

:::caution
Exceeding API rate limits repeatedly can lead to either a temporary or permanent
ban from the OpenAQ API. To maintain uninterrupted access, plan your API
requests carefully.
:::

## Rate limit headers

The OpenAQ API includes response headers to help you manage request rates and
adhere to limits. These headers give information about your current request
usage, remaining capacity, and reset times, allowing you to plan your API calls
effectively.

<table>
  <tbody>
    <tr>
      <td style="white-space: nowrap;"><code>x-ratelimit-used</code></td>
      <td>Shows the number of requests that have been made during the current
      rate limit period. It helps users track their usage and avoid exceeding
      limits.</td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><code>x-ratelimit-reset</code></td>
      <td>Provides a timestamp indicating when the rate limit period will reset. Users can use this information to plan when they can start making requests again.</td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><code>x-ratelimit-limit</code></td>
      <td>Specifies the maximum number of requests allowed within the current rate limit period. It sets the upper bound for the number of requests a user can make.</td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><code>x-ratelimit-remaining</code></td>
      <td>Indicates the number of requests remaining before reaching the rate limit. Monitoring this helps users avoid hitting the limit and encountering rate limit errors.</td>
    </tr>
  </tbody>
</table>

### Example headers

```sh {5-8}
HTTP/2 200 
content-type: application/json
content-length: 1681
date: Sat, 24 Aug 2024 21:20:25 GMT
x-ratelimit-used: 1
x-ratelimit-reset: 60
x-ratelimit-limit: 10
x-ratelimit-remaining: 9
...
```

In the example HTTP response above, the rate limit headers reveal:

* You can make a total of 10 requests in this period.
* You have used 1 request so far.
* You have 9 requests remaining before reaching the limit.
* The limit will reset in 60 seconds, at which point the request count will
start over.
