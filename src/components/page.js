import React from "react"
import propTypes from "prop-types"

export default class Page extends React.Component {
  handleClick = event => {
    const year = +event.currentTarget.value;
    this.props.setYear(year);
  }

  render() {
    const { year, photos } = this.props

    return (
      <div>
        <div>
          <button onClick={this.handleClick} value="2020">
            2020
          </button>
          <button onClick={this.handleClick} value="2019">
            2019
          </button>
          <button onClick={this.handleClick} value="2018">
            2018
          </button>
        </div>
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
  setYear: propTypes.func.isRequired,
}
