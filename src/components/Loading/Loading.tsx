import * as React from 'react';
import { style } from 'typestyle';

const loadingClass = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
});

export class Loading extends React.Component<{}, {}> {

  render() {
    return <div className={loadingClass}>Loading...</div>;
  }
  
}