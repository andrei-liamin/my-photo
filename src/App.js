import React from 'react'
import { connect } from 'react-redux'

import './App.css'

class App extends React.Component {
  render() {
    const { name, surname, age } = this.props.user
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My top photos</h1>
        </header>
        <p>
          Hi {name} {surname}! Looks like you're {age} years old
        </p>
        <p className="App-intro">Here will be your top liked photos</p>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
  }
}

export default connect(mapStateToProps)(App)
