import React, { Component } from 'react';
import { Ellipse } from 'react-konva';

//at start, two same rectangles at one place
//at the end of drag, note the x and y of the dragged rectangle, append it to GraphicsMain
//return the dragged rectangle to original

class Circle extends Component {
  render() {
    return (
      <>
        <Ellipse
          radiusX={20}
          radiusY={20}
          stroke="black"
          strokeWidth={1.5}
          x={37.5}
          y={125}
        />
        <Ellipse
          radiusX={20}
          radiusY={20}
          stroke="black"
          strokeWidth={1.5}
          x={37.5}
          y={125}
          draggable
          ref="draggableEllipse"
          onDragEnd={(e) => {
            //add the rectangle to parent
            let name = 'ellipse' + this.props.ellipseName;
            let toSend = {
              x: e.target.x(),
              y: e.target.y(),
              radiusX: 20,
              radiusY: 20,
              stroke: 'black',
              strokeWidth: 1.5,
              name: name,
              fill: 'white',
              ref: name,
              rotation: 0,
            };
            this.props.appendToEllipses(toSend);

            var ellipse = this.refs.draggableEllipse;

            ellipse.position({
              x: 37.5,
              y: 125,
            });
          }}
        />
      </>
    );
  }
}

export default Circle;
