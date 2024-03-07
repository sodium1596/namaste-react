import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/restaurantMockData";
import { useState } from "react";

const Body = () => {
  const [ listOfRestaurants, setListOfRestaurants ] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;