import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState("");

  useEffect(() => {
    const joke = async () => {
      try {
        const response = await axios.get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });
        setJokes(response.data.joke);
      } catch (err) {
        console.log(err);
      }
    };
    joke();
  }, []);

  const getJokes = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response);
      setJokes(response.data.joke);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes Generator</h1>
        <p className="text">{jokes}</p>
        <button className="btn" onClick={(e) => getJokes(e)}>
          Generate Joke
        </button>
      </header>
    </div>
  );
}

export default App;
