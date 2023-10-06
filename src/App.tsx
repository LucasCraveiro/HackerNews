import { useEffect, useState } from "react";
import SingleNews from "./components/SingleNews";
import "./App.css";

function App() {
  const [newsIds, setNewsIds] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => response.json())
      .then((data) => setNewsIds(data.slice(0, 50)));
  }, []);

  return (
    <>
      <h1>Hacker News</h1>
      <div className="items-wrapper">
        {newsIds.map((newsID) => (
          <SingleNews id={newsID} key={newsID} />
        ))}
      </div>
    </>
  );
}

export default App;
