import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, areaName, cloudinaryImageId, } = resData;
    return (
        <div className="res-card" style={styleCard}>
            <img
                class="res-logo"
                src={
                    CDN_URL +
                    cloudinaryImageId
                }
                alt="logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{areaName}</h4>
        </div>
    );
};

export default RestaurantCard;