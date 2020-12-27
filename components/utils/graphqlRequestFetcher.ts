import { request } from 'graphql-request';

export function defaultGraphQlFetcher (query: string): Promise<any> {
  return request(process.env.GRAPHQL_URL, query);
} 
