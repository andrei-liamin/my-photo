import React from 'react'
import { connect } from 'react-redux'

import './App.css'

class App extends React.Component {
  render() {
    const { user, page } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My top photos</h1>
        </header>
        <p>
          Hi {user.name} {user.surname}! Looks like you're {user.age} years old
        </p>
        <p className="App-intro">
          You have {page.photos.length} photos for the {page.year}
        </p>
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
