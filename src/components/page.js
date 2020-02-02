import React from "react"
import propTypes from "prop-types"

export default class Page extends React.Component {
  handleClick = event => {
    const year = +event.currentTarget.value;
    this.props.getPhotos(year);
  }

  render() {
    const { year, photos, isFetching } = this.props

    return (
      <div className="ib page">
        <div>
          <button className="btn" onClick={this.handleClick} value="2020">
            2020
          </button>{' '}
          <button className="btn" onClick={this.handleClick} value="2019">
            2019
          </button>{' '}
          <button className="btn" onClick={this.handleClick} value="2018">
            2018
          </button>
        </div>
        <h3>{year}</h3>
        <p>
          {isFetching ? "Loading..." : `You have ${photos.length} photos`}
        </p>
      </div>
    )
  }
}

Page.propTypes = {
  year: propTypes.number.isRequired,
  photos: propTypes.array.isRequired,
  getPhotos: propTypes.func.isRequired,
}
