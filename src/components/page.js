import React from "react";
import propTypes from "prop-types";

export default class Page extends React.Component {
  render() {
    const { year, photos } = this.props;

    return (
      <div>
        <p>
          You have {photos.length} photos for the {year}
        </p>
      </div>
    )
  }
}

Page.propTypes = {
  year: propTypes.number.isRequired,
  surname: propTypes.array.isRequired,
}
