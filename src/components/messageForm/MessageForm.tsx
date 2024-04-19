import { ChangeEvent, FormEvent, useState } from "react";
import "./MessageForm.css";
import { IMessage } from "../../services/interfaces/IMessage";

interface MessageFormProps {
  handleSubmitMessage: (message: IMessage) => void;
}

const MessageForm = (props: MessageFormProps) => {
  const { handleSubmitMessage } = props;
  const [message, setMessage] = useState<IMessage>({
    id: "",
    name: "",
    title: "",
    content: "",
    date: "",
  });
  const { name, title, content, date } = message;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, message: IMessage) => {
    e.preventDefault();
    message.id = crypto.randomUUID();
    message.date = new Date().toISOString();
    handleSubmitMessage(message);
    setMessage({
      name: "",
      title: "",
      content: "",
      date: "",
      id: "",
    });
  };

  return (
    <div className="message-form">
      <h3>Nous contacter</h3>
      <form onSubmit={(e) => handleSubmit(e, message)}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={handleChange} value={name} />
        </div>
        <div>
          <label htmlFor="subject">Sujet: </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="content">Message: </label>
          <textarea
            name="content"
            onChange={handleChange}
            value={content}
          ></textarea>
        </div>
        <input type="hidden" name="date" value={date} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default MessageForm;
