import React, { Component } from 'react';
import { Rect } from 'react-konva';

//at start, two same rectangles at one place
//at the end of drag, note the x and y of the dragged rectangle, append it to GraphicsMain
//return the dragged rectangle to original

class Rectangle extends Component {
  render() {
    return (
      <>
        <Rect
          width={35}
          height={35}
          stroke="black"
          strokeWidth={1.5}
          x={20}
          y={180}
          fill="white"
        />
        <Rect
          width={35}
          height={35}
          stroke="black"
          strokeWidth={1.5}
          x={20}
          y={180}
          draggable
          fill="white"
          ref="draggableRect"
          onDragEnd={(e) => {
            //add the rectangle to parent
            let name = 'rectangle' + this.props.rectName;
            let toSend = {
              x: e.target.x(),
              y: e.target.y(),
              width: 35,
              height: 35,
              stroke: 'black',
              strokeWidth: 1.5,
              rotation: 0,
              name: name,
              ref: name,
              fill: 'white',
              useImage: false,
            };
            this.props.appendToRectangles(toSend);

            var rect = this.refs.draggableRect;

            rect.position({
              x: 20,
              y: 180,
            });
          }}
        />
      </>
    );
  }
}

export default Rectangle;
