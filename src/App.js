import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("Tejas");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("hi..", name);
  }, [name]);
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((n) => n + 1)}> Click me </button>
      <input onChange={(e) => setName(e.target.value)} value={name} />
    </div>
  );
}
