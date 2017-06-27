import { getJson } from '../../utils/fetchService';
import { mockResponse } from '../data/mocks';
import { DataWrapper, Comic } from '../../apis/marvel/marvelApis';
import * as fs from 'fs';

describe('checkStatus', () => {
  it('returns parsed json if status is valid', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      new Promise((resolve, reject) =>
        fs.readFile('./src/tests/data/comicResponse.json', 'utf8', (err, data) =>
          err ? reject(err) : resolve(mockResponse(200, '', data)))
      )
    );

    return getJson<DataWrapper<Comic>>('https://gateway.marvel.com/v1/public/comics')
      .then(result => {
        expect(result.data.offset).toBe(1);
        expect(result.data.limit).toBe(20);
        expect(result.data.total).toBe(39845);
        expect(result.data.count).toBe(20);
        expect(result.data.results.length).toBe(20);

      });
  });

  it('throws exception when reponse status is invalid', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      new Promise((resolve, reject) =>
        fs.readFile('./src/tests/data/comicResponse.json', 'utf8', (err, data) =>
          err ? reject(err) : resolve(mockResponse(301, 'Moved Permanently', '')))
      )
    );

    return getJson<DataWrapper<Comic>>('https://gateway.marvel.com/v1/public/comics')
      .catch((error: Error) => {
        expect(error.name).toBe('Error');
        expect(error.message).toBe('Moved Permanently');
      });
  })
});