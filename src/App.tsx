/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import ArticlePage from "./pages/article/ArticlePage";
import Narbar from "./components/navbar/Narbar";
import { useState } from "react";
import { IArticle } from "./services/interfaces/IArticle";
import NotFound from "./components/notFound/NotFound";
import { IMessage } from "./services/interfaces/IMessage";
import MessageDetail from "./pages/messageDetail/MessageDetail";

function App() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handleSubmitMessage = (message: IMessage) => {
    setMessages([...messages, message]);
  };

  const handleSubmitArticle = (article: IArticle) => {
    setArticles([...articles, article]);
  };

  console.log(articles);

  return (
    <>
      <Narbar />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              articles={articles}
              handleSubmitMessage={handleSubmitMessage}
              messages={messages}
            />
          }
        />
        <Route path="/blog" element={<BlogPage articles={articles} />} />
        <Route
          path="/article"
          element={<ArticlePage handleSubmitArticle={handleSubmitArticle} />}
        />
        <Route
          path="/messages/:id"
          element={<MessageDetail messages={messages} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
