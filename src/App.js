import { useEffect, useState } from "react";

function Hello() {
  function hiFn() {
    console.log("created :)");
    return byFn; // 처음 show 할 때 created가 나오고 컴포넌트가 파괴될 때 리턴한 Function을 실행한다.
  }
  function byFn() {
    console.log("bye :(");
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

//딱 한번만 실행되고 다시는 실행되지 않도록 하고 싶을 수있는 방법 : useEffect //
