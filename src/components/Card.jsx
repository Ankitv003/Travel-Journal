import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-flex">
        <img className="card-img" src={props.cardItem.imageUrl} />
      </div>

      <div className="card-stats">
        <div className="card-location-block">
          <FontAwesomeIcon icon={faLocationDot} className="card-location-img" />
          <h4 className="card-location">{props.cardItem.location}</h4>

          <span>
            <a className="card-maps-link" href={props.cardItem.googleMapsUrl}>
              View on Google Maps
            </a>
          </span>
        </div>

        <h1 className="card-title">{props.cardItem.title}</h1>
        <span>
          {props.cardItem.startDate} - {props.cardItem.endDate}{" "}
        </span>
        <p className="card-content">{props.cardItem.description}</p>
      </div>
    </div>
  );
};

export default Card;
