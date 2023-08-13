import "./button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Button() {
  return (
    <div>
      <a href="">
        <img className="sell-btn" src="/sellbtn.png" />
      </a>
    </div>
  );
}

export const LoginButton = () => {
  return (
    <a href="" className="login">
      Login
    </a>
  );
};

export const Lang = () => {
  return (
    <div className="selectParent">
      <div id="lang-view" className="lang-flex">
        <p id="drop" className="lang-ctn">
          ENGLISH
        </p>
        <FontAwesomeIcon
          className="icon-arrow"
          icon={faChevronDown}
          size="xl"
        />
      </div>
      <ul className="drop-ctn">
        <li>
          English<span style={{ padding: "0 0 0 100px" }}>✔️</span>
        </li>
        <li>हिंदी</li>
      </ul>
    </div>
  );
};

export default Button;
