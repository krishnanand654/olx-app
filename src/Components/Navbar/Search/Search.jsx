import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Search() {
  const [seData, setSeData] = useState();
  const nav = useNavigate();
  const userDown = (e) => {
    if (e.key == "Enter") {
      nav("/search?q=" + seData);
    }
  };
  return (
    <div>
      <button className="srch-btn-frnt">
        <FontAwesomeIcon icon={faSearch} />
      </button>

      <select className="srch-place" type="text" placeholder="India">
        <option selected>India</option>
      </select>
      <FontAwesomeIcon className="icon-place" icon={faChevronDown} size="xl" />
      <input
        className="srch-in"
        type="text"
        placeholder="Find Cars, Mobile Phones and more..."
        onChange={(e) => {
          setSeData(e.target.value);
        }}
        onKeyDown={userDown}
      />

      <button className="srch-btn">
        <FontAwesomeIcon className="icon" icon={faSearch} />
      </button>
    </div>
  );
}

export default Search;
