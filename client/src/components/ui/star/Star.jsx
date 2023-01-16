import React from 'react';
import { Star } from 'react-konva';

//at start, two same rectangles at one place
//at the end of drag, note the x and y of the dragged rectangle, append it to GraphicsMain
//return the dragged rectangle to original

class StarComponent extends React.Component {
  render() {
    return (
      <>
        <Star
          innerRadius={8}
          outerRadius={20}
          numPoints={5}
          stroke="black"
          strokeWidth={1.5}
          x={37.5}
          y={270}
          fill="white"
        />
        <Star
          innerRadius={8}
          outerRadius={20}
          numPoints={5}
          stroke="black"
          strokeWidth={1.5}
          x={37.5}
          y={270}
          draggable
          ref="draggableStar"
          onDragEnd={(e) => {
            //add the rectangle to parent
            const name = 'star' + this.props.starName;
            const toSend = {
              x: e.target.x(),
              y: e.target.y(),
              innerRadius: 8,
              outerRadius: 20,
              numPoints: 5,
              stroke: 'black',
              strokeWidth: 1.5,
              name: name,
              fill: 'white',
              ref: name,
              rotation: 0,
            };
            this.props.appendToStars(toSend);

            const star = this.refs.draggableStar;

            star.position({
              x: 37.5,
              y: 270,
            });
          }}
        />
      </>
    );
  }
}

export default StarComponent;
