import { ChangeEvent, FormEvent, useState } from "react";
import "./ArticleForm.css";
import { IArticle } from "../../services/interfaces/IArticle";

interface ArticleFormProps {
  handleSubmitArticle: (article: IArticle) => void;
}

const ArticleForm = (props: ArticleFormProps) => {
  const { handleSubmitArticle } = props;

  const [article, setArticle] = useState<IArticle>({
    author: "",
    title: "",
    description: "",
    date: "",
  });
  const { author, title, description, date } = article;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    article.date = new Date().toISOString();
    handleSubmitArticle(article);
    setArticle({
      author: "",
      title: "",
      description: "",
      date: "",
    });
  };

  return (
    <div className="article-form">
      <h3>Ajouter un article</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Auteur: </label>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </div>
        <div>
          <label htmlFor="title">Titre: </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            onChange={handleChange}
            value={description}
          ></textarea>
        </div>
        <input type="hidden" name="date" value={date} />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default ArticleForm;
