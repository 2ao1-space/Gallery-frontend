import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/about" className="hover:underline">
        About
      </Link>
    </header>
  );
}
