import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="card-all">
      <div>
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

//  id:1,
//     title: "Mount Fuji",
//     location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
