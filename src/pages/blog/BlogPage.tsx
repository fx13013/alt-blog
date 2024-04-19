import ArticleList from "../../components/articleList/ArticleList";
import { IArticle } from "../../services/interfaces/IArticle";

interface BlogPageProps {
  articles: IArticle[];
}

const BlogPage = (props: BlogPageProps) => {
  const { articles } = props;
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default BlogPage;
