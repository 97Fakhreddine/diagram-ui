import React from 'react';
import { Text } from 'react-konva';

//at start, two same rectangles at one place
//at the end of drag, note the x and y of the dragged rectangle, append it to GraphicsMain
//return the dragged rectangle to original

export default class TextComponent extends React.Component {
  render() {
    return (
      <>
        <Text fontSize={40} text="T" fontFamily="Belgrano" x={24} y={320} />
        <Text
          fontSize={40}
          text="T"
          fontFamily="Belgrano"
          x={24}
          y={320}
          draggable
          ref="draggableText"
          onDragEnd={(e) => {
            //add the rectangle to parent
            const name = 'text' + this.props.textName;
            const ref = 'text' + this.props.textName;
            const toSend = {
              x: e.target.x(),
              y: e.target.y(),
              fontSize: 25,
              fontFamily: 'Belgrano',
              ref: ref,
              name: name,
              text: '',
              fill: 'black',
              width: 300,
              height: 25,
              rotation: 0,
              textWidth: this.refs.draggableText.textWidth,
              textHeight: this.refs.draggableText.textHeight,
            };
            this.props.appendToTexts(toSend);

            const text = this.refs.draggableText;

            text.position({
              x: 24,
              y: 320,
            });
          }}
        />
      </>
    );
  }
}
