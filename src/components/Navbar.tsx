import { useState } from "react";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const menuItems = [
  { name: "Login", path: "/" },
  { name: "Wall Creators", path: "/wall" },
  { name: "Features", path: "/" },
  { name: "Testimonials", path: "/" },
  { name: "Contact Us", path: "/" },
];
const Navbar:React.FC = () => {
  const [isToggle, setToggle] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <nav>
      <div className={styles.heading}>
        <label
          className={styles.logo}
          htmlFor="check"
          onClick={() => setToggle(!isToggle)}
        >
          {isToggle ? (
            <AiOutlineAlignLeft size={30} style={{ color: "black" }} />
          ) : (
            <AiOutlineClose size={30} style={{ color: "black" }} />
          )}
        </label>
        <img width="200px" src={logo} alt="Green Thread" />
      </div>
      <ul className={isToggle ? "" : styles.toggle}>
        {menuItems.map((el, index) => (
          <li key={index}>
            <a onClick={() => navigate(el.path)}>{el.name}</a>
          </li>
        ))}
        <li>
          <button onClick={() => navigate("/")}>
            Get Started for free
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
