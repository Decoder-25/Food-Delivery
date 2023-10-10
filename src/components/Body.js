import { useEffect, useState } from "react";  // hooks are basically javascript funtions that has magical powers in dom manipaulations
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


//use state is a hook to use in the state management in react
//where we always are updating something in data layer and it syncs with the ui layer to show it to the user.

// Virtual DOM : It is a representation of an actual DOM in a javascript object
// Reconcillation Algorithm (React fibre) : In react 16, New algorithm came up into the picture 
//                                          to find out a new way to difference between the old DOM and
//                                          The new DOM and then update according to this in UI layer.
//Link : https://github.com/acdlite/react-fiber-architecture


const Body = () => {

    const [ListOfRestaurant, setListOfRestaurant] = useState(resList);  // Usestate is basically when we are updating our state variable, react re render the ui automatically.

    useEffect(() =>{  //UseEffect is a hook that we use when I want to do any task after rendering the react componenet. Here we're following (start - render - api - render)
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.47925795332987&lng=88.39425399899483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" //this is swiggy's api, we are calling it by downloading CORS extension to avoid the browser's CORS blocker.
        );
        const json = await data.json();

        console.log(json);
        //optional chaining
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (
        <div className="body">
            <div className="filter"><button className="filter-btn"
            onClick={() => {
                const filteredList = ListOfRestaurant.filter((res) => res.avgRating >= 4.5); //filter we use to filter out in certain elements
                setListOfRestaurant(filteredList); // where we want to update the ui, we use set funtion on it.
            }}
            >Top Rated Restaurants</button></div>
            <div className="res-container">
                {ListOfRestaurant.map((restaurant) => (
                    <RestaurantCard resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;



