import { useEffect, useState } from "react";
import SingleNews from "./components/SingleNews";
import "./App.css";

function App() {
  const [newsIds, setNewsIds] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => response.json())
      .then((data) => setNewsIds(data.slice(0, 30)));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      {newsIds.map((newsID) => (
        <SingleNews id={newsID} />
      ))}
    </>
  );
}

export default App;
