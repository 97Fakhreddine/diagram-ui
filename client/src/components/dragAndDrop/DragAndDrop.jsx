import React, { Component, createRef } from 'react';

class DragAndDrop extends Component {
  dropRef = createRef();
  state = { dragging: false };

  handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.dragCounter++;
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      this.setState({ dragging: true });
    }
  };

  handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter > 0) return; //exit early without setting dragging to false
    this.setState({ dragging: false });
  };

  handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files && event.dataTransfer.files.length === 1) {
      this.props.handleDrop(event.dataTransfer.files[0]);
      event.dataTransfer.clearData();
      this.dragCounter = 0;
      this.setState({ dragging: false });
    }
  };

  componentDidMount() {
    this.dragCounter = 0;

    let bigDiv = this.dropRef.current;
    bigDiv.addEventListener('dragenter', this.handleDragEnter);

    bigDiv.addEventListener('dragleave', this.handleDragLeave);
    bigDiv.addEventListener('drop', this.handleDrop);
    bigDiv.addEventListener('dragover', this.handleDragOver);
  }
  componentWillMount() {
    //remove the aevent listeners
  }

  render() {
    return (
      <div
        ref={this.dropRef}
        style={{ display: 'inline-block', position: 'relative' }}
      >
        {this.state.dragging && (
          <div
            style={{
              border: 'dashed grey 1px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36,
              }}
            >
              <span>Drop it like it's hot :)</span>
            </div>
          </div>
        )}

        {this.props.children}
      </div>
    );
  }
}

export default DragAndDrop;
