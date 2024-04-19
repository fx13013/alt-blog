import ArticleForm from "../../components/articleForm/ArticleForm";
import { IArticle } from "../../services/interfaces/IArticle";

interface ArticlePageProps {
  handleSubmitArticle: (article: IArticle) => void;
}

const ArticlePage = (props: ArticlePageProps) => {
  const { handleSubmitArticle } = props;
  return (
    <div>
      <ArticleForm handleSubmitArticle={handleSubmitArticle} />
    </div>
  );
};

export default ArticlePage;
