import { useState, useEffect } from "react"

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [coin, setCoin] = useState("");
  const [inverted, setInverted] = useState(false);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(res => res.json())
      .then(data => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  const onSelect = event => {
    setCoin(event.target.value);
    setInverted(false);
    setAmount(0);
  }
  return (
    <div>

      <h1>The Coins! ({coins.length})</h1>
      {loading ? <p>Loading...</p> :
        <select name="coinSelector" id="coinSelector"
          onChange={onSelect}>
          <option value="" key="">Select a coin</option>
          {coins.map((coin, index) => <option key={index} value={index}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</option>)}
        </select>
      }
      {coin === "" ? null : <div>
        <label htmlFor="coinamount">{coins[coin].name}</label>
        <input
          type="number"
          id="coinamount"
          onChange={event => {
            if (!inverted) {
              setAmount(event.target.value)
            }
          }}
          disabled={inverted}
          value={!inverted? amount: amount / coins[coin].quotes.USD.price}
        />
        <div>
          <label htmlFor="fiatamount">USD</label>
          <input
            type="number"
            id="fiatamount"
            onChange={event => {
              if (inverted) {
                setAmount(event.target.value)
              }
            }}
            value={inverted? amount : coins[coin].quotes.USD.price * amount}
            disabled={!inverted}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setInverted((prev)=>!prev);
              setAmount(0);
            }}
          >Flip</button>
        </div>
      </div>}
    </div>
  );
}

export default App;
