import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export { Navigation };
