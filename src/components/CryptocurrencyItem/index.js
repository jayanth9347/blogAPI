// Write your JS code here

const CryptocurrencyItem = props => {
  const {items} = props
  const {currentLogo, currentName, value, id, usdValue} = items
  return (
    <div>
      <div>
        <img src={currentLogo} />
      </div>
      <div>
        <h1> {currentName} </h1>
        <p> {value} </p>
        <p> {usdValue} </p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
