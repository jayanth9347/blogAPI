import CryptocurrencyTracker from './components/CryptocurrencyTracker'
import CryptocurrenciesList from './components/CryptocurrenciesList'

import './App.css'

const App = () => (
  <div className="background">
    <ul>
      <CryptocurrencyTracker />
      <CryptocurrenciesList />
    </ul>
  </div>
)

export default App
