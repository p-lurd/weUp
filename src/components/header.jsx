import weup from "../assets/we-up.svg";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL;

  const getMainTextColor = () => {
    if (location.pathname === "/" || location.pathname === "/signup" || location.pathname === "/login") {
      return { text: "text-white", bgColor: "" };
    } else {
      return { text: "text-black", bgColor: "bg-gray-200" };
    }
  };

  return (
    <header
      className={`
    flex flex-row 
    ${getMainTextColor().text}
    font-primary
    justify-between
    md:ml-4
     pr-4 pl-4
    `}
    >
      <div className="my-6">
        <img src={weup} alt="logo" onClick={() => navigate("/")} className="hover:cursor-pointer"/>
      </div>

      <nav className={`hidden md:flex justify-evenly flex-1 my-7 sm:pl-[8%]`}>
        <div className="flex space-x-8 text-xs">
          <Link to={"/"}>Home</Link>
          <Link to={"#"}>Monitoring</Link>
          <Link to={"#"}>Features</Link>
          <Link to={"#"}>Pricing</Link>
          <Link to={`mailto:${supportEmail}`}>Get Help</Link>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
