import { useEffect, useState } from "react";

function Hello() {
  /*useEffect(function () {
    console.log("hi :");
    return () => console.log("bye :(");
  }, []);*/
  useEffect(() => {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
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
