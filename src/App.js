import { useState, useEffect } from "react"

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => (prev + 1));
  };
  useEffect(() => {
    console.log("i run only once")
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("i run when the keyword changes");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword and counter changes");
  }, [counter, keyword]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search here..."
        onChange={
          (e) => setKeyword(e.target.value)
        }
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
