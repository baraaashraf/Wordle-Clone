import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import solutions from "./data/solutions.json";

function App() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    console.log(solutions)
    const randomSolution = solutions.words[Math.floor(Math.random() * solutions.words.length)];
    setSolution(randomSolution.word);
    console.log(randomSolution.word);
  }, []);
  return (
    <div className="App">
      <h1 className="karnak">Wordle (clone)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
