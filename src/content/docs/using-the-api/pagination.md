---
title: Pagination
description:
  The OpenAQ API employs pagination to manage the large volume of air quality
  data it generates, returning a maximum of 100 results per request by default.
  Users can adjust this limit to retrieve up to 1,000 results per page, using
  the limit and page query parameters to navigate through extensive datasets
  efficiently.
---

Air quality monitoring produces a significant volume of data. Therefore, the
OpenAQ API uses pagination to return a subset of the results. By default, a
request will return a maximum of 100 results in a single page. This limit can be
adjusted using the `limit` query parameter, up to a maximum of 1,000 results per
page, i.e., `limit=1000`. Using this limit in conjunction with the `page` query
parameter, you can access a large result set across multiple requests.

The total number of records in a result set is available in the JSON response
body in the `meta` object under the `found` key. The `meta` object in the
response JSON also provides the limit under the `limit` key:

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
