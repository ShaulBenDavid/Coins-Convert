import { useEffect, useState } from 'react';
import './App.css';

const CALC_TYPE = ["SelectForm", "SelectTo"];

function App() {
  const [myValue, setMyValue] = useState('');
  const [calcValue, setCalcValue] = useState('');
  const [coinsKeys, setCoinsKeys] = useState([]);
  const [coinsValues, setCoinsValues] = useState([]);
  const [coinClacValueFrom, setCoinCalcValueFrom] = useState(1);
  const [coinClacValueTo, setCoinCalcValueTo] = useState(1);

  let nf = new Intl.NumberFormat('en-US');

  useEffect(() => {
    const getCoinsValue = async () => {
      const response = await fetch("https://v6.exchangerate-api.com/v6/2b4a22f2934a0dc9f5c28854/latest/USD");
      const data = await response.json();
      setCoinsKeys(Object.keys(data.conversion_rates));
      setCoinsValues(Object.values(data.conversion_rates));
    };
    
    getCoinsValue();
    
    
  }, []);

  


  const handleSubmit = (event) => {
    event.preventDefault();

    let calc = ((myValue / coinClacValueFrom) * coinClacValueTo).toFixed(2);
    calc = nf.format(calc);
    setCalcValue(calc);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setMyValue(value);
  }

  const HandleSelect = (event, id) => {
    console.log(event.target.value, id);
    if (id === 0) {
      setCoinCalcValueFrom(coinsValues[event.target.value]) 
    } else {
      setCoinCalcValueTo(coinsValues[event.target.value])
    }
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleChange} value={myValue}/>

        {CALC_TYPE.map((e, i) => {
          return (
            <select name={e} id="coins" onChange={(event) => HandleSelect(event,i)} key={i}>
            {coinsKeys.map((e, i) => {
              return (
                    <option value={i} key={i}>{e}</option>
              )}) 
            }
          </select>
          )
        })}
        <button type='submit'>Claculate</button>
      </form>
      {calcValue && <p>{calcValue}</p>}
    </div>
  );
}

export default App;
