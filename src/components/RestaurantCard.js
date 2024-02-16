import { RES_LOGO_CDN } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cuisines, avgRating, areaName } = restaurantData.info;
  const { slaString } = restaurantData.info.sla;

  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            RES_LOGO_CDN +
            restaurantData.info.cloudinaryImageId
          }
        />
      </div>
      <div className="res-card-description">
        <div className="restaurant-title">{name}</div>
        <div className="rating-content">
          <span>{avgRating} .</span>
          {slaString}
        </div>
        <div className="cuisines-content">
          <div>{cuisines.join(", ")}</div>
          <div>{areaName}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
