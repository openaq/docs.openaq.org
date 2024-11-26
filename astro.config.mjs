import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

import robotsTxt from 'astro-robots-txt';


export default defineConfig({
  site: 'https://docs.openaq.org',
  integrations: [starlight({
    title: 'OpenAQ Docs',
    logo: {
      light: './src/assets/logo.svg',
      dark: './src/assets/logo-dark.svg',
    },
    favicon: '/favicon.svg',
    head: [
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: '16x16 32x32',
        },
      },
    ],
    components: {
      Head: './src/components/Head.astro',
    },
    social: {
      github: 'https://github.com/openaq',
      slack:
        'https://join.slack.com/t/openaq/shared_invite/zt-yzqlgsva-v6McumTjy2BZnegIK9XCVw',
    },
    customCss: ['./src/styles/custom.css'],
    plugins: [
      starlightOpenAPI([
        {
          base: 'api',
          label: 'API Reference',
          collapsed: true,
          schema: 'https://api.openaq.org/openapi.json',
        },
      ]),
    ],
    sidebar: [
      {
        label: 'About the API',
        items: [
          { label: 'About the API', slug: 'about/about' },
          { label: 'Terms of use', slug: 'about/terms' },
        ],
      },
      {
        label: 'Using the API',
        items: [
          {
            label: 'Quick start',
            slug: 'using-the-api/quick-start',
          },
          { label: 'API key', slug: 'using-the-api/api-key' },
          {
            label: 'Rate limits',
            slug: 'using-the-api/rate-limits',
          },
          { label: 'Pagination', slug: 'using-the-api/pagination' },
          {
            label: 'Dates, datetimes and timezones',
            slug: 'using-the-api/dates-datetimes',
          },
          {
            label: 'Geospatial queries',
            slug: 'using-the-api/geospatial',
          },
          { label: 'Errors', slug: 'using-the-api/errors' },
          {
            label: 'Client libraries',
            slug: 'using-the-api/libraries',
          },
        ],
      },
      {
        label: 'Examples',
        items: [
          { label: 'Examples', slug: 'examples/examples' },
        ],
      },
      {
        label: 'Resources',
        items: [
          { label: 'Countries', slug: 'resources/countries' },
          { label: 'Instruments', slug: 'resources/instruments' },
          { label: 'Latest', slug: 'resources/latest' },
          { label: 'Licenses', slug: 'resources/licenses' },
          { label: 'Locations', slug: 'resources/locations' },
          {
            label: 'Manufacturers',
            slug: 'resources/manufacturers',
          },
          { label: 'Measurements', slug: 'resources/measurements' },
          { label: 'Owners', slug: 'resources/owners' },
          { label: 'Parameters', slug: 'resources/parameters' },
          { label: 'Providers', slug: 'resources/providers' },
          { label: 'Sensors', slug: 'resources/sensors' },
        ],
      },
      ...openAPISidebarGroups,
      {
        label: 'Open Data on AWS',
        items: [
          { label: 'Quick start', slug: 'aws/quick-start' },
          { label: 'About Open Data on AWS', slug: 'aws/about' },
          {
            label: 'Guide - Downloading a year of data',
            slug: 'aws/year-guide',
          },
          {
            label: 'Guide - Querying with Athena',
            slug: 'aws/athena-guide',
          },
        ],
      },
    ],
  }),
  , sitemap()
  , robotsTxt()
  , icon({
    include: {
      mdi: ["emoticon-happy-outline", "emoticon-sad-outline"], // Loads only Material Design Icon's "account" SVG
    }
  })
],
});