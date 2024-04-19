import "./HomePage.css";
import MessageForm from "../../components/messageForm/MessageForm";
import MessageList from "../../components/messageList/MessageList";
import LastArticle from "../../components/lastArticle/LastArticle";
import { IArticle } from "../../services/interfaces/IArticle";
import { IMessage } from "../../services/interfaces/IMessage";

interface HomePageProps {
  articles: IArticle[];
  messages: IMessage[];
  handleSubmitMessage: (message: IMessage) => void;
}

const Homepage = (props: HomePageProps) => {
  const { articles, handleSubmitMessage, messages } = props;

  console.log(messages);

  return (
    <>
      <div className="container">
        <MessageList messages={messages} />
        <MessageForm handleSubmitMessage={handleSubmitMessage} />
      </div>
      <LastArticle articles={articles} />
    </>
  );
};

export default Homepage;

// const blogs = [
//   {
//     content: "Efficiently simplify enabled",
//     date: "2024-04-10T20:32:06.013Z",
//     name: "Amine",
//     title: "React",
//   },
//   {
//     content: "Efficiently simplify enabled",
//     date: "2024-03-16T20:32:06.013Z",
//     name: "Amine",
//     title: "React",
//   },
//   {
//     content: "Efficiently simplify enabled",
//     date: "2024-02-16T20:32:06.013Z",
//     name: "Amine",
//     title: "React",
//   },
//   {
//     content: "Efficiently simplify enabled",
//     date: "2024-01-01T20:32:06.013Z",
//     name: "Amine",
//     title: "React",
//   },
//   {
//     content: "Efficiently simplify enabled",
//     date: "2024-04-04T20:32:06.013Z",
//     name: "Amine",
//     title: "React",
//   },
// ];
