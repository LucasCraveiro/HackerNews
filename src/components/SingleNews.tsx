import { useEffect, useState } from "react";
import "../App.css";

type SingleNewsType = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

function SingleNews({ id }: { id: number }) {
  const [singleNews, setSingleNews] = useState<SingleNewsType | undefined>();

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((response) => response.json())
      .then((data) => setSingleNews(data));
  }, []);

  return (
    <>
      <h4>{singleNews?.title}</h4>
    </>
  );
}

export default SingleNews;
