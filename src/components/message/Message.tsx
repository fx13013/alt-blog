import { Link } from "react-router-dom";
import "./Message.css";
import { IMessage } from "../../services/interfaces/IMessage";

interface MessageProps {
  message: IMessage;
}

const Message = (props: MessageProps) => {
  const { message } = props;
  const { name, title, content, date, id } = message;
  return (
    <div className="message-card">
      <div className="images">
        <img src="https://placehold.co/100X100" alt="images" />
      </div>
      <div className="content">
        <strong>{name}</strong>
        <p>{title}</p>
        <p>{content}</p>
        <em>{date}</em>
      </div>
      <div className="">
        <Link to={`/messages/${id}`}>Voir</Link>
      </div>
    </div>
  );
};

export default Message;
