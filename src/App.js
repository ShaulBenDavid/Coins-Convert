import { useEffect, useState } from 'react';
import './App.css';
import ClockUpdate from './Components/ClockUpdate';
import ConvertForm from './Components/ConvertForm';

function App() {
  const [coinTypeAndValue, setcoinTypeAndValue] = useState([]);
  const [calcValue, setCalcValue] = useState('');
  const [updateTime, setUpdateTime] = useState('');

  useEffect(() => {
    const getCoinsValue = async () => {
      const response = await fetch("https://v6.exchangerate-api.com/v6/2b4a22f2934a0dc9f5c28854/latest/USD");
      const data = await response.json();
      console.log(data);
      setcoinTypeAndValue(Object.entries(data.conversion_rates));
      setUpdateTime(data.time_last_update_utc);
    };
    
    getCoinsValue();
    
    
  }, []);

  const addCalcValue = (event) => {
    setCalcValue(event);
  }

  return (
    <div className="App">
      <div className="content-warpper">
        <div className="content-container">

          <header className='header-container'>
            <h1>Money Converter</h1>
            <ClockUpdate updateTime={updateTime} />
          </header>

          <div className='form-container'>
            <ConvertForm
              coinTypeAndValue={coinTypeAndValue}
              addCalcValue={addCalcValue}
            />
            {calcValue && <p>{calcValue}</p>}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
