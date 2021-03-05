import React from 'react';
// import "./NewReview/NewReview.css";

class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleShowDialog = this.handleShowDialog.bind(this);
  }

  handleShowDialog() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <>
        <img
          className="small"
          src={this.props.src}
          onClick={this.handleShowDialog}
          onKeyPress={this.handleShowDialog}
          alt="small"
          width="50px"
          role="presentation"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: 'absolute' }}
            open
            onClick={this.handleShowDialog}
            onKeyPress={this.handleShowDialog}
            role="presentation"
          >
            <img
              className="image"
              src={this.props.src}
              onClick={this.handleShowDialog}
              onKeyPress={this.handleShowDialog}
              alt="big"
              role="presentation"
            />
          </dialog>
        )}
      </>
    );
  }
}

export default ImageComponent;
