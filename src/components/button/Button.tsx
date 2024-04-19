/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

const Button = (props: any) => {
  const { id } = props;
  return (
    <div>
      <Link to={`/messages/${id}`}>Voir</Link>
    </div>
  );
};

export default Button;
