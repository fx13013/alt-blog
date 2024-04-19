import { useParams } from "react-router-dom";
import Message from "../../components/message/Message";
import { IMessage } from "../../services/interfaces/IMessage";

interface MessageDetailProps {
  messages: IMessage[];
}

const MessageDetail = (props: MessageDetailProps) => {
  const { messages } = props;
  const { id } = useParams();
  const message = messages.filter((message: IMessage) => message.id === id)[0];

  if (!message) return <p>Aucun message avec cet id</p>;

  return <Message message={message} />;
};

export default MessageDetail;
