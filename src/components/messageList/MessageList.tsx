import { IMessage } from "../../services/interfaces/IMessage";
import Message from "../message/Message";
import "./MessageList.css";

interface MessageListProps {
  messages: IMessage[];
}

const MessageList = (props: MessageListProps) => {
  const { messages } = props;
  console.log(messages);
  function sortByDateDescending(a: IMessage, b: IMessage) {
    // Convertit les dates en objets Date
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    // Trie par date décroissante
    return dateB - dateA;
  }

  const sortedMessages = messages.sort(sortByDateDescending);

  return (
    <div className="message-list">
      <h3>Boite de réception des messages</h3>
      {sortedMessages.length > 0 ? (
        sortedMessages.map((message: IMessage, index: number) => (
          <Message key={index} message={message} />
        ))
      ) : (
        <p>Vous n'avez aucun messages</p>
      )}
    </div>
  );
};

export default MessageList;
