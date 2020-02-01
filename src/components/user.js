import React from "react";
import propTypes from "prop-types";

export default class User extends React.Component {
  render() {
    const { name, surname } = this.props

    return (
      <div>
        <p> Hi {name} {surname}!</p>
      </div>
    )
  }
}

User.propTypes = {
  name: propTypes.string.isRequired,
  surname: propTypes.string.isRequired,
}