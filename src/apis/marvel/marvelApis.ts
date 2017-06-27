import * as fetchService from '../../utils/fetchService';
import { config } from '../../config/config';

export interface DataWrapper<T> {
  data: DataContainer<T>;
}

export interface DataContainer<T> {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
}

export interface Image {
  extension: string;
  path: string;
}

export interface Comic {
  id: string;
  title: string;
  thumbnail: Image;
  description: string;
}

export interface Character {
  id: string;
  name: string;
  thumbnail: Image;
  description: string;
}

export const getComics = (limit: number = config.countPerPage, offset: number = 0): Promise<DataWrapper<Comic>> => {
  const url = `${config.marvelBaseEndpoint}/v1/public/comics?apikey=${config.marvelApiKey}`
    + `&limit=${limit}&offset=${offset}`;
  return fetchService.getJson<DataWrapper<Comic>>(url);
};