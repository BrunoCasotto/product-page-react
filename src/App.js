import React, { Component } from 'react'
import '_styles/global.css'
import '_styles/reset.css'
import './App.css'
import ProductPage from '_pages/Product.jsx'
import Header from '_components/header/index.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductPage />
      </div>
    )
  }
}

export default App
