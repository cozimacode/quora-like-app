import React, { PureComponent } from "react";
import { CloseButton } from "../../assets";

export default class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  handleClick = () => {
    this.setState((state) => ({
      isClicked: !state.isClicked,
    }));
  };

  render() {
    let { src, alt } = this.props;
    let { isClicked } = this.state;
    return (
      <div
        onClick={this.handleClick}
        className={isClicked ? "qla-image image-zoomed" : "qla-image"}
      >
        {isClicked && <CloseButton />}
        <img src={src} alt={alt} />
      </div>
    );
  }
}
