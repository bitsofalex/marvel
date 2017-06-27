import * as React from 'react';
import { style } from 'typestyle';
import { padded } from '../../styles/theme';

const footerClass = style({ display: 'flex', backgroundColor: '#DC4729', color: 'white' }, padded);

export class Footer extends React.Component<{}, {}> {
  render() {
    return <div className={footerClass}>Data provided by Marvel. © 2014 Marvel</div>;
  }
}