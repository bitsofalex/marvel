import { ComicStore } from '../../stores/ComicStore';
import { mockResponse } from '../data/mocks';
import * as fs from 'fs';

describe('Comic store', () => {
  
  let comicStore: ComicStore;

  beforeAll(() => {
    comicStore = new ComicStore();
  });

  it('loads comics into store', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      new Promise((resolve, reject) =>
        fs.readFile('./src/tests/data/comicResponse.json', 'utf8', (err, data) =>
          err ? reject(err) : resolve(mockResponse(200, '', data)))
      )
    );

    expect(comicStore.isLoading).toBe(false);
    expect(comicStore.comics.length).toBe(0);

    return comicStore.loadComics(20)
      .then(() => {
        expect(comicStore.isLoading).toBe(false);
        expect(comicStore.offset).toBe(1);
        expect(comicStore.limit).toBe(20);
        expect(comicStore.total).toBe(39845);
        expect(comicStore.count).toBe(20);
        expect(comicStore.comics.length).toBe(20);
      });
  });


});