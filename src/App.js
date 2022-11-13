import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import CatImg from './assets/cat-unsplash.jpg'


function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
    });
  }

  useEffect(() => {
    fetchCatFact();
  }, []); // useEffecr runs once because of []

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      <p> {catFact} </p>
      <div>
        <img src={CatImg} alt="cat" />
      </div>
    </div>
  );
}

export default App;
