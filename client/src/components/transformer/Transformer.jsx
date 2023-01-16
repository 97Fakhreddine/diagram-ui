import React, { Component } from 'react';
import { Transformer } from 'react-konva';

class TransformerComponent extends Component {
  componentDidMount() {
    this.checkNode();
  }
  componentDidUpdate() {
    this.checkNode();
  }
  checkNode() {
    const stage = this.transformer.getStage();

    const { selectedShapeName } = this.props;
    if (selectedShapeName === '') {
      this.transformer.detach();
      return;
    }
    const selectedNode = stage.findOne('.' + selectedShapeName);
    if (selectedNode === this.transformer.node()) {
      return;
    }

    if (selectedNode) {
      this.transformer.attachTo(selectedNode);
    } else {
      this.transformer.detach();
    }
    this.transformer.getLayer().batchDraw();
  }
  render() {
    if (this.props.selectedShapeName.includes('text')) {
      var stuff = (
        <Transformer
          ref={(node) => {
            this.transformer = node;
          }}
          name="transformer"
          boundBoxFunc={(oldBox, newBox) => {
            newBox.width = Math.max(30, newBox.width);
            return newBox;
          }}
          enabledAnchors={['middle-left', 'middle-right']}
        />
      );
    } else if (this.props.selectedShapeName.includes('star')) {
      var stuff = (
        <Transformer
          ref={(node) => {
            this.transformer = node;
          }}
          name="transformer"
          enabledAnchors={[
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right',
          ]}
        />
      );
    } else if (this.props.selectedShapeName.includes('arrow')) {
      var stuff = (
        <Transformer
          ref={(node) => {
            this.transformer = node;
          }}
          name="transformer"
          resizeEnabled={false}
          rotateEnabled={false}
        />
      );
    } else {
      var stuff = (
        <Transformer
          ref={(node) => {
            this.transformer = node;
          }}
          name="transformer"
          keepRatio={true}
        />
      );
    }
    return stuff;
  }
}

export default TransformerComponent;
