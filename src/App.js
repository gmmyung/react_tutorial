import {useState} from "react"

function App() {
  console.log("render")
  const [counter, setCounter] = useState(0);
  const onClick = ()=>{
    setCounter((prev)=>(prev+1))
  };
  console.log("call an api")
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
