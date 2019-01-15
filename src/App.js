import React, { Component } from 'react';
import './index.css'
import CountPage from './pages/Count' 
import Caderno from './pages/Caderno'

class App extends Component {
  render() {
    return (
    <div className="layout">
      <Caderno/>
  </div>
  )
}
}

export default App;
