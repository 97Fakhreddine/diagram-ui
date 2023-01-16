import React, { Component } from 'react';

import { Rect } from 'react-konva';
import Circle from '../ui/circle/Circle.jsx';
import Rectangle from '../ui/rectangle/Rectangle.jsx';
import Star from '../ui/star/Star.jsx';
import Text from '../ui/text/Text.jsx';
import Arrow from '../ui/arrow/Arrow.jsx';

const ToolBar = () => (
  <Rect
    y={80}
    width={77.5}
    height={355}
    fill="white"
    shadowBlur={5}
    shadowColor="black"
  />
);

export default class Toolbar extends Component {
  state = {
    arrowDraggable: false,
    previousShape: undefined,
    count: 0,
    isDragging: false,
  };

  setShape(shape) {
    this.setState({ previousShape: shape });
  }

  render() {
    return (
      <>
        {this.props.layer ? (
          <>
            <ToolBar />
            <Circle
              ellipseName={this.props.ellipseName}
              appendToEllipses={this.props.appendToEllipses}
            />
            <Rectangle
              rectName={this.props.rectName}
              appendToRectangles={this.props.appendToRectangles}
            />

            <Star
              starName={this.props.starName}
              appendToStars={this.props.appendToStars}
            />

            <Text
              textName={this.props.textName}
              appendToTexts={this.props.appendToTexts}
            />

            <Arrow
              arrowName={this.props.arrowName}
              appendToArrows={this.props.appendToArrows}
              layer={this.props.layer}
              setShape={this.setShape.bind(this)}
              previousShape={this.state.previousShape}
              newArrowOnDragEnd={this.props.newArrowOnDragEnd}
            />
          </>
        ) : null}
      </>
    );
  }
}
