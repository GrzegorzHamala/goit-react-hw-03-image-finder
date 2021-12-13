import React, { Component } from 'react'
import "./../Styles/styles.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.checkEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.checkEvent);
  }

  checkEvent = (e) => {
    if (e.key === "Escape" || e.target === e.currentTarget) {
      this.props.toogleModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <div className="Overlay" onClick={this.checkEvent}>
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
