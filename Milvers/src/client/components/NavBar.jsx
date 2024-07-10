// Components imports
import NavButtons from "./buttons/navButtons";
import { Link } from "react-router-dom";
import RoundBtn from "./buttons/roundBtn";

const NavBar = () => {
  // const [bool, setBool] = useState(false)

  // const changeBool = () => {

  //     return setBool(!bool)

  // }

  return (
    <header role="header">

      <nav role="navigation-bar" className="flex-row fixed space-btwn bg-blackhsl">
      <img
        role="company logo"
        src="/images/milvers_logo_1.png"
        alt="company logo"
        className="img-main-logo"
      /> 
        <ul role="navigation-buttons" className="nav-buttons flex-row sm-gap sm-padding">
          <NavButtons name="Home" link="/#home" />
          <NavButtons name="Solutions" link="/#solutions" />
          <NavButtons name="Projects" link="/#projects" />
          <NavButtons name="About Us" link="/#about-us" />
          <NavButtons name="Contact" link="/#contact-us" />
          <RoundBtn color={true} name="Let's Talk" />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
