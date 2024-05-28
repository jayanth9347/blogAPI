import {Component} from 'react'

import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="background">
        <h1> CryptocurrencyTracker </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="image"
        />
      </div>
    )
  }
}

export default CryptocurrencyTracker
