import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState("");
  const [getCoin, setgetCoin] = useState("");
  const writeMoney = (event) => setMyMoney(event.target.value);
  const selectCoin = (event) => setgetCoin(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>the Coins! {loading ? null : `(${coins.length})`}</h1>
      <div>
        <input
          type="number"
          value={myMoney}
          onChange={writeMoney}
          placeholder="Write your USD"
        ></input>
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={selectCoin}>
          <option key="-1">select buy coins</option>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price.toFixed(2)}
            </option>
          ))}
        </select>
      )}
      <div>
        <h2>
          Coins you can buy :{" "}
          {getCoin > 0 ? (myMoney / getCoin).toFixed(2) : null}
        </h2>
      </div>
    </div>
  );
}

export default App;
