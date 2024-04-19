import { IArticle } from "../../services/interfaces/IArticle";
import "./Article.css";

interface ArticleProps {
  article: IArticle;
}

const Article = (props: ArticleProps) => {
  const { article } = props;
  const { author, title, description, date } = article;

  return (
    <div className="article">
      <div className="images">
        <img src="https://placehold.co/100X100" alt="images" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{author}</p>
        <em>{date}</em>
      </div>
    </div>
  );
};

export default Article;
