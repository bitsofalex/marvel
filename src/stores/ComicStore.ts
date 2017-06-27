import { observable, action } from 'mobx';
import { Comic } from '../apis/marvel/marvelApis';
import * as marvelApis from '../apis/marvel/marvelApis';
import { config } from '../config/config';

export class ComicStore {

  @observable isLoading: boolean = false;
  @observable comics: Comic[] = observable([]);
  @observable offset: number;
  @observable limit: number;
  @observable total: number;
  @observable count: number;

  @action loadComics(offset: number): Promise<void> {
    this.isLoading = true;
    return marvelApis.getComics(config.countPerPage, offset)
      .then(result => {
        this.isLoading = false;
        result.data.results.forEach((comic: Comic) => this.comics.push(comic));
        this.offset = result.data.offset;
        this.limit = result.data.limit;
        this.total = result.data.total;
        this.count = result.data.count;
      })
      .catch(error => {
        this.isLoading = true;
        throw error;
      });
  }

}