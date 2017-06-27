import getMuiTheme from 'material-ui/styles/getMuiTheme';

interface Config {
  marvelBaseEndpoint: string;
  marvelApiKey: string;
  countPerPage: number;
}

export const config: Config = {
  marvelBaseEndpoint: 'https://gateway.marvel.com',
  marvelApiKey: '5cd5298300a4437b3384a6b1a831b6e7',
  countPerPage: 20
};

export const customTheme = getMuiTheme({
  appBar: {
    color: '#46454A'
  }
});