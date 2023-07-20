import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN01 || '',
  apiKey: process.env.API_KEY01 || '',
});

export const clientBlog = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN02 || '',
  apiKey: process.env.API_KEY02 || '',
});