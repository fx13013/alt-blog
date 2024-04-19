import "./LastArticle.css";

import { useState } from "react";
import { IArticle } from "../../services/interfaces/IArticle";

interface LastArticleProps {
  articles: IArticle[];
}

const LastArticle = (props: LastArticleProps) => {
  const { articles } = props;

  const [lastArticle] = useState<IArticle | null>(
    getMostRecentObject(articles)
  );

  function getMostRecentObject(articles: IArticle[]) {
    if (articles.length === 0) {
      return null; // Retourne null si le tableau est vide
    }

    return articles.reduce((mostRecent, current) => {
      // Convertit les dates en objets Date
      const mostRecentDate = new Date(mostRecent.date);
      const currentDate = new Date(current.date);
      // Compare les dates et retourne l'objet le plus récent
      return mostRecentDate > currentDate ? mostRecent : current;
    });
  }

  console.log(lastArticle);

  return (
    <div>
      <h3>Le dernier article</h3>
      {lastArticle ? (
        <div className="last-article">
          <div className="images">
            <img src="https://placehold.co/100X100" alt="images" />
          </div>
          <div>
            <strong>{lastArticle.author}</strong>
            <p>{lastArticle.title}</p>
            <p>{lastArticle.description}</p>
            <em>{lastArticle.date}</em>
          </div>
        </div>
      ) : (
        <p>Aucun article actuellement</p>
      )}
    </div>
  );
};

export default LastArticle;
