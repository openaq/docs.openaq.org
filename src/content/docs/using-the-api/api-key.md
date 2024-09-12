---
title: API Key
description: Learn how to obtain, manage, and use your OpenAQ API key to access air quality data. Secure your API key, include it in requests, and ensure safe transmission with HTTPS. Unauthorized requests without a valid API key will be denied.
---

The OpenAQ API uses API keys to authenticate requests and manage access. These
keys help control usage and enforce rate limits, ensuring that the service
remains available and responsive for all users.

## Managing Your API Key

Sign up at the [OpenAQ Explorer](https://explore.openaq.org) to get your API
key. You can access and rotate your key from the OpenAQ Explorer account
settings page [https://explore.openaq.org/account](https://explore.openaq.org/account).

:::caution
Treat your API key as you would a password. Do not share your API key with
others. If your API key leaks, you can request a new one in your OpenAQ Explorer
account.
:::

## Using Your API Key

Include your API key in the `X-API-Key` header of each request. For example:

```sh
curl --request GET \
--url "https://api.openaq.org/v3/locations/2178" \
--header "X-API-Key: YOUR-OPENAQ-API-KEY" 
```

Replace `YOUR-OPENAQ-API-KEY` with your actual key. This key verifies your
requests and ensures they are processed.

## Important Considerations

* Secure Transmission: Use HTTPS for all requests. HTTP requests will be
rejected.
* Required Authentication: Requests without a valid API key will be denied and
will return an HTTP 401 "Unauthorized" error.
