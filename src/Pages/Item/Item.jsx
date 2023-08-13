import data from "../../db/db";
import { useParams } from "react-router-dom";
import "./item.css";
function Item() {
  const { id } = useParams();
  return (
    <div>
      {data.map((element) =>
        element.id == id ? (
          <>
            <div className="item-ctn">
              <div>
                <img className="det-img" src={element.img} />
              </div>
              <div className="content">
                <h1 className="except">{element.price}</h1>
                <p className="except">{element.desc}</p>
                <p>{element.date}</p>
                <p>{element.sub}</p>

                <p>{element.date}</p>
                <p>{element.loc}</p>
              </div>
            </div>
          </>
        ) : null
      )}
    </div>
  );
}

export default Item;
