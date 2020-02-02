import React from "react";
import { connect } from "react-redux";
import Page from "../components/page";
import User from "../components/user";
import { getPhotos } from "../actions/pageActions";

import "../styles/app.css";

class App extends React.Component {
  render() {
    const { user, page, getPhotos } = this.props

    return (
      <div className="row">
        <Page {...page} getPhotos={getPhotos}/>
        <User {...user}/>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: year => dispatch(getPhotos(year))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
