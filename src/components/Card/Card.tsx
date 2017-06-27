import * as React from 'react';
import { style } from 'typestyle';

interface CardProps {
  title: string;
  imageUrl: string;
  imageAlignBottom: boolean;
}

export class Card extends React.Component<CardProps, {}> {

  render() {
    const { title, imageUrl, imageAlignBottom } = this.props;

    const cardClass = style({ flexBasis: '15em', flex: 1, margin: '0 1em 1.5em 1em' });

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
      alignBottom ? { backgroundPosition: 'bottom center' } : {});

    return (
      <div className={cardClass}>
        <div className={cardImageClass(imageUrl, imageAlignBottom)} />
        <div>{title}</div>
      </div>
    );
  }
}