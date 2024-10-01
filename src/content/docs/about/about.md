---
title: About the API
description:
  Discover the OpenAQ API, which offers open access to global air quality data
  based on REST principles. The API primarily focuses on key pollutants like
  PM<sub>2.5</sub>, PM<sub>10</sub>, SO<sub>2</sub>, and more, aggregating data
  from various sources. While the data is publicly available, users must comply
  with third-party terms. Explore version 3 of the OpenAQ API and utilize its
  uniform, actionable data format for comprehensive environmental analysis.
  Support OpenAQ’s mission to make air quality data accessible by considering a
  donation.
---

The OpenAQ API provides open access to global air quality data, following REST
principles with resource-oriented URLs, standard HTTP response codes, and
JSON-formatted responses. OpenAQ focuses on criteria air pollutants, primarily
aggregating PM<sub>2.5</sub>, PM<sub>10</sub>, SO<sub>2</sub>, NO<sub>2</sub>,
CO, O<sub>3</sub>, BC, relative humidity and temperature measurement data. For a
limited set of locations, we have data for PM<sub>1</sub>, PM<sub>4</sub>,
CO<sub>2</sub>, NO, NO<sub>x</sub>, CH<sub>4</sub> & UFP.

The data on OpenAQ do not represent all air quality monitoring data in the
world; they are data that OpenAQ has discovered or been introduced to and that
are publicly available. We welcome new data contributions.

All data accessed through the API is public. However, you are responsible for
complying with applicable third-party terms. Please see our
[Terms of Use](/about/terms) for very important information on intellectual
property, allowable and considerate use, and more.

This documentation guide covers the OpenAQ API version 3. OpenAPI reference
documentation for version 1 and 2 is still available in the [reference](/api/)
section but all other content in this guide pertains to version 3. To get
started, explore the available endpoints and consult the documentation for
guidance.

---

This repository of global air quality data is brought to you by
[OpenAQ](https://openaq.org/#/), a nonprofit organization founded in the U.S.
OpenAQ was the first to aggregate ground-level ambient air quality data on an
open-source platform. We provide unique value due to a combination of attributes
that make these data easily accessible, interoperable, interpretable and
actionable. We:

- harmonize the data into a single, uniform format so that they are easily
  comparable
- share the data in physical units rather than as an air quality index
- host near real-time and historical data
- share "metadata" (the data that provides the context for individual data
  points)
- make the data available programmatically via an API
- keep the underlying data-fetching software fully open
- provide tools for users of all abilities to access and use the data

If you value this service, please consider making a
[donation](https://secure.givelively.org/donate/openaq-inc/) to sustain the
OpenAQ platform far into the future.
