import React, { useEffect, useState } from 'react';
import { Block } from './components/Block';
import './index.css';

function App() {
  const [rates, setRates] = useState({})
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
    .then((res) => res.json())
    .then((json) => {
      setRates(json.rates)
      console.log(json.rates)
    })
    .catch((err) => {
      console.warn(err)
      alert('Не получилось получить информацию')
    })

    
  }, [])
  const onChangeFromPrice = (value) =>{
    const price = value / rates[fromCurrency]
    const result = price * rates[toCurrency]
    setToPrice(result)
    setFromPrice(value)

  }

  const onChangeToPrice = (value) =>{

    setFromPrice(value)

  }
  const onChangeFromCurrency = (cur) =>{
    setFromCurrency(cur)
    onChangeFromPrice(fromPrice)
  }

  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={onChangeFromCurrency} onChangeValue={onChangeFromPrice}  />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}  />
    </div>
  );
}

export default App;