---
title: Pagination
---

Air quality monitoring can produce a significant volume of data, the OpenAQ API
uses pagination to return a subset of the results. By default a request will
return a maximum of 100 results in a single page. This limit can be adjusted
using the `limit` query parameter, up to a maximum of 1000 results per page,
i.e. `limit=1000`. Using this limit in conjunction with the `page` query
parameter, we can access a large result set across multiple requests.

The total number of records in a result set is available in the JSON response
body in the `meta` object under the `found` key. The limit value is echoed out
for reference also in the meta object under the `limit` key:

```json {6,7}
{
    "meta": {
        "name": "openaq-api",
        "website": "/",
        "page": 1,
        "limit": 100,
        "found": 16492
    },
    "results": [...]
}
```
