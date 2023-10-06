import { useEffect, useState } from "react";
import "../App.css";

type SingleNewsType = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number | string | Date;
  title: string;
  type: string;
  url: string;
};

function SingleNews({ id }: { id: number }) {
  const [singleNews, setSingleNews] = useState<SingleNewsType>();

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setSingleNews(data);
      });
  }, [id]);

  //Modifing date format
  const date =
    singleNews && typeof singleNews.time === "number"
      ? new Date(singleNews.time * 1000)
      : null;

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en-CA", options);
  const formattedDate = date ? formatter.format(date) : "";

  return (
    <div className="link-wrapper">
      <a href={singleNews?.url} target="blank">
        <h4 className="news-title">{singleNews?.title}</h4>
      </a>
      <div className="info-container">
        <p>{`${singleNews?.score} points by ${singleNews?.by}`}</p>
        <span>|</span>
        <p>{formattedDate}</p>
        <span>|</span>
        <p>{`Type: ${singleNews?.type.toUpperCase()}`}</p>
      </div>
    </div>
  );
}

export default SingleNews;
