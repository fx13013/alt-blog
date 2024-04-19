import { IArticle } from "../../services/interfaces/IArticle";
import Article from "../article/Article";

interface ArticleListProps {
  articles: IArticle[];
}

const ArticleList = (props: ArticleListProps) => {
  const { articles } = props;

  function sortByDateDescending(a: IArticle, b: IArticle) {
    // Convertit les dates en objets Date
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    // Trie par date décroissante
    return dateB - dateA;
  }

  const sortedArticles = articles.sort(sortByDateDescending);

  return (
    <div>
      <h3>Tous les articles du plus récent au plus ancien</h3>
      {sortedArticles.length > 0 ? (
        sortedArticles.map((article: IArticle, index: number) => (
          <Article key={index} article={article} />
        ))
      ) : (
        <p>Aucun article actuellement</p>
      )}
    </div>
  );
};

export default ArticleList;
