import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [ listOfRestaurants, setListOfRestaurants ] = useState([]);
  const [ filteredRestaurant, setFilteredRestaurant ] = useState([]);

  const [ searchText, setSearchText ] = useState("");

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  fetchRestaurantList = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return listOfRestaurants.length === 0 ? <h1>Loading...</h1> : (
    <div className="body">
      <div className="search-container">
        <div className="search-input-container">
          <input type="text" className="search-input" placeholder="Search for restaurants and food" 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            maxLength={200}></input>
        </div>
        <div className="separator"></div>
        <div className="search-btn-container">
          <span onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}>Search</span>
        </div>
      </div>
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >Ratings 4.5+</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
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