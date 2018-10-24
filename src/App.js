import React, { Component, lazy, Suspense } from "react"
import "./App.css"
const Logo = lazy(() => import("./Logo"))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Suspense fallback={<div>Loading...</div>}>
            <Logo />
          </Suspense>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
