import { request } from 'graphql-request';

export const GRAPHQL_URL = process.env.API_URL + "/graphql";

export function defaultGraphQlFetcher (query: string): Promise<any> {
  return request(GRAPHQL_URL, query);
} 
