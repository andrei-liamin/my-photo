import React from "react";
import { connect } from "react-redux";
import Page from "../components/page";
import User from "../components/user";

import "./App.css";

class App extends React.Component {
  render() {
    const { user, page } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My top photos</h1>
        </header>
        <User {...user}/>
        <Page {...page}/>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
    page: store.page,
  }
}

export default connect(mapStateToProps)(App)
