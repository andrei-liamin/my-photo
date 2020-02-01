import React from "react";
import { connect } from "react-redux";
import Page from "../components/page";
import User from "../components/user";
import { setYear } from "../actions/pageActions";

import "./App.css";

class App extends React.Component {
  render() {
    const { user, page, setYear } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My top photos</h1>
        </header>
        <User {...user}/>
        <Page {...page} setYear={setYear}/>
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
    setYear: year => dispatch(setYear(year))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
