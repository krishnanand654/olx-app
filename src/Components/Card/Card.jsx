/* eslint-disable react/prop-types */
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Card(props) {
  return (
    <div className="card">
      <div className="love-icon-ctn">
        <FontAwesomeIcon className="love-icon" icon={faHeart} size="xl" />
      </div>

      <div className="img-ctn">
        <img className="img-data" src={props.image} />
      </div>
      <h2>{props.price}</h2>
      <p className="sub">{props.title.substring(0, 30)}</p>
      <p className="desc">{props.description.substring(0, 30)}</p>
      <div className="loc-ctn">
        {/* <p>{props.rating}</p> */}
        <p>{props.category}</p>
      </div>
    </div>
  );
}

export default Card;
