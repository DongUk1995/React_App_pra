import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
    // 전체 코드를 실행 할 때 한 번만 실행하는데 코인 사이트에 요청을 하고 데이터에 응답으로 받은 데이터를 받고 응답 데이터를 json으로 변경해야 하며 json 호출을 한다.
    // 그 후 변화한 json 데이터로 setCoins로 전달 coins로 저장 된다.
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
            </option> // 리스트로 감싼 coins를 각각의 코인들을 li를 한 후 그 coin 데이터 안에 이름과 심볼, 가격 만 표시하게 만듬
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
