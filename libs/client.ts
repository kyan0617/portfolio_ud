import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'nharuka',
  apiKey: process.env.API_KEY01 || '',
});

export const clientBlog = createClient({
  serviceDomain: 'nuxtblog',
  apiKey: process.env.API_KEY02 || '',
});