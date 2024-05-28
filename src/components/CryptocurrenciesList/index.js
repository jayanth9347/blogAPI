import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {valus: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updateData = data.map(each => ({
      currentLogo: each.currency_logo,
      currentName: each.currency_name,
      value: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({value: updateData})
  }

  render() {
    const {value} = this.state
    return (
      <div>
        {value.map(each => (
          <CryptocurrencyItem items={each} />
        ))}
        <h1> Im Jayanth </h1>
      </div>
    )
  }
}

export default CryptocurrenciesList
