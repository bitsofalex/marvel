import * as React from 'react';
import { observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router-dom';
import { ComicStore } from '../../stores/ComicStore';
import { Loading } from '../../components';
import { Card, CardImage, CardContent, Content, Title } from 'bloomer';
import { style } from 'typestyle';
import { Comic } from '../../apis/marvel/marvelApis';

interface ComicCardListProp extends RouteComponentProps<{}> {
  store: ComicStore;
}

const verticalClass = style({ display: 'flex', flex: 1, flexDirection: 'column' });
const comicListClass = style({ display: 'flex', flex: 1, flexWrap: 'wrap', padding: '1em' });
const cardImageClass = (url: string, alignBottom: boolean) => style(
  {
    backgroundImage: `url("${url}")`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    height: '200px',
    maxHeight: '200px',
    overflow: 'hidden',
    opacity: 1,
    transition: 'all 0.2s ease-in-out'
  },
  alignBottom ? { backgroundPosition: 'bottom center' } : {}
);

@observer
export class ComicCardList extends React.Component<ComicCardListProp, {}> {

  componentWillMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const offset = Number(params.get('offset'));
    this.props.store.loadComics(offset);
  }

  handlePageClick = (data: { selected: number }) => {
    global.console.log(this.props);
    this.props.store.loadComics(data.selected);
  }

  renderList(comics: Comic[]) {
    return comics.map(comic => {

      const imageUrl: string = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
      const alignBottom: boolean = comic.thumbnail.path.includes('image_not_available');

      return (
        <Card key={comic.id} style={{ flex: 1, margin: '0 1em 1.5em 1em', flexBasis: '15em' }}>
          <CardImage>
            <div className={cardImageClass(imageUrl, alignBottom)} />
          </CardImage>
          <CardContent>
            <Content>
              <Title tag="div" isSize={5}>{comic.title}</Title>
            </Content>
          </CardContent>
        </Card>
      );
    }
    );
  }

  render() {
    const { store } = this.props;

    return store.isLoading ? <Loading /> :
      (
        <div className={verticalClass}>
          <div className={comicListClass}>
            {this.renderList(store.comics)}
          </div>
        </div>
      );
  }

}