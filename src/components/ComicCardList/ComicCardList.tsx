import * as React from 'react';
import { observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router-dom';
import { ComicStore } from '../../stores/ComicStore';
import { Card, Loading } from '../../components';
import { style } from 'typestyle';
import { Comic } from '../../apis/marvel/marvelApis';

interface ComicCardListProp extends RouteComponentProps<{}> {
  store: ComicStore;
}

@observer
export class ComicCardList extends React.Component<ComicCardListProp, {}> {

  componentWillMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const offset = Number(params.get('offset'));
    this.props.store.loadComics(offset);
  }

  renderList(comics: Comic[]) {
    const comicListClass = style({ display: 'flex', flex: 1, flexWrap: 'wrap', padding: '1em' });
    return (
      <div className={comicListClass}>
        {
          comics.map(comic =>
            <Card
              key={comic.id}
              title={comic.title}
              imageUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              imageAlignBottom={comic.thumbnail.path.includes('image_not_available')}
            />)
        }
      </div>);
  }

  render() {
    const { store } = this.props;
    return store.isLoading ? <Loading /> : this.renderList(store.comics);
  }

}