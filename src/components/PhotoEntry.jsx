import React from "react";
import "./master.css";

class PhotoEntry extends React.Component {
  render() {
    console.log("this.props.caption = " + this.props.caption);
    console.log("this.props.location = " + this.props.location);
    console.log("this.props.src = " + this.props.src);

    // Correctly referencing images from the public/images directory
    const image_path = "/images/" + this.props.src;

    return (
      <div className="photo-entry-block">
        <a href={image_path}>
          <img className="photo-img" src={image_path} alt={this.props.location} />
        </a>
        <h5>{this.props.caption}</h5>
        <h6>{this.props.location}</h6>
      </div>
    );
  }
}

export default PhotoEntry;
