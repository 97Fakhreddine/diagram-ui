import React from 'react';
import { Arrow } from 'react-konva';

//at start, two same rectangles at one place
//at the end of drag, note the x and y of the dragged rectangle, append it to GraphicsMain
//return the dragged rectangle to original

export default class ArrowComponent extends React.Component {
  render() {
    return (
      <>
        <Arrow points={[20, 400, 50, 400]} fill="black" stroke="black" />
        <Arrow
          points={[20, 400, 50, 400]}
          fill="black"
          stroke="black"
          ref="draggableArrow"
          name="draggableArrow"
          draggable
          onDragStart={() => {
            this.refs.draggableArrow.setAttr('fill', 'grey');
            this.refs.draggableArrow.setAttr('stroke', 'grey');
          }}
          onDragMove={() => {
            const pos = this.props.layer.getStage().getPointerPosition();
            const shape = this.props.layer.getIntersection(pos);

            //after first frame
            if (
              this.props.previousShape !== undefined &&
              this.props.previousShape !== null
            )
              if (this.props.previousShape !== shape) {
                //arrow entered a new shape

                //the shape we left gets its original color back
                if (
                  this.props.previousShape.attrs.id !== 'ContainerRect' &&
                  !this.props.previousShape.attrs.name.includes('arrow')
                ) {
                  this.refs.draggableArrow.setAttr('fill', 'black');
                  this.refs.draggableArrow.setAttr('stroke', 'black');
                }
              }
              //if arrow is moving in a single shape
              else if (
                this.props.previousShape.attrs.id !== 'ContainerRect' &&
                !shape.attrs.name.includes('arrow')
              ) {
                //if it the first time the shapes are same, set shape to blue, store the original color
                this.refs.draggableArrow.setAttr('fill', '#ccf5ff');
                this.refs.draggableArrow.setAttr('stroke', '#ccf5ff');
              }

            this.props.layer.draw();
            this.props.setShape(shape);
          }}
          onDragEnd={(event) => {
            const pos = this.props.layer.getStage().getPointerPosition();
            const shape = this.props.layer.getIntersection(pos);

            //shape is not containerRect, which means we are on a shape
            if (
              shape &&
              shape.attrs.id === undefined &&
              !shape.attrs.name.includes('arrow')
            ) {
              const toSend = {
                x: pos.x,
                y: pos.y,
                points: [20, 475, 60, 475],
                from: shape,
                stroke: 'black',
                strokeWidth: '1.5',
                fill: 'black',
              };
              this.props.newArrowOnDragEnd(toSend);
            } else {
              const toSend = {
                x: pos.x,
                y: pos.y,
                points: [20, 475, 60, 475],
                stroke: 'black',
                strokeWidth: '1.5',
                fill: 'black',
              };

              this.props.newArrowOnDragEnd(toSend);
            }

            //if shape is not arrow nor the containerRect then we make a connector instead

            //onDragEnd = dropping arrow down, create a new arrow with 2 same points at the dropped location
            //create new arrow in Graphics.js
            //from there, fire onMouseMove over the entire stage
            //the arrow's points should be the first point onDragEnd and the second should be the current
            //mouse position determined by onMouseMove event in stage
            const arrow = this.refs.draggableArrow;
            arrow.position({ x: 0, y: 0 });
            arrow.setAttr('fill', 'black');
            arrow.setAttr('stroke', 'black');

            arrow.draw();
          }}
        />
      </>
    );
  }
}
