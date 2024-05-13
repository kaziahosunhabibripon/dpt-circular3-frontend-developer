import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex items-center justify-around bg-slate-700 text-slate-300 text-2xl">
      <h1>&reg; Ripon</h1>
      <Link to="https://github.com/kaziahosunhabibripon">Github</Link>
      <p>&copy; {currentYear}</p>
    </div>
  );
};

export default Footer;
