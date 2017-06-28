import { observable, action, computed, IObservableArray } from 'mobx';
import { Comic } from '../apis/marvel/marvelApis';
import * as marvelApis from '../apis/marvel/marvelApis';
import { config } from '../config/config';

export class ComicStore {

  @observable isLoading: boolean = false;
  @observable comics: IObservableArray<Comic> = observable([]);
  @observable offset: number;
  @observable limit: number;
  @observable total: number;
  @observable count: number;

  @computed get pageCount() {
    return this.total / this.limit;
  }

  @action loadComics(offset: number): Promise<void> {
    this.isLoading = true;
    return marvelApis.getComics(config.countPerPage, offset)
      .then(result => {
        this.isLoading = false;
        this.comics.clear();
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