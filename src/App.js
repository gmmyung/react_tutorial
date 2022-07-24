import { useState, useEffect } from "react"

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(res => res.json())
      .then(data => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <p>Loading...</p> : null}
      <ul>
        {coins.map((coin, index)=><li key={index}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</li>)}
      </ul>
    </div>
  );
}

export default App;
