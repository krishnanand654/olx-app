import "./subnav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Subnav() {
  return (
    <div>
      <ul className="sub-flex">
        <div className="cat-flex" id="cat-flex">
          <li className="active" id="active">
            ALL CATEGORIES
          </li>
          <FontAwesomeIcon
            id="icon-arrow2"
            className="icon-arrow2"
            icon={faChevronDown}
            size="xl"
          />
        </div>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Mobile Phones</li>
        <li>For Sale: Houses & Apartments</li>
        <li>Scooters</li>
        <li>Commercial & Other Vehicles</li>
        <li>For Rent: Houses & Apartments</li>
      </ul>
    </div>
  );
}

export default Subnav;
