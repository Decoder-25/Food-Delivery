import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    const { resData } = props;

    console.log("cloudinaryImageId:", resData.cloudinaryImageId);

    const { name, cuisines, avgRating, areaName, cloudinaryImageId, } = resData;
    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                src={
                    CDN_URL +
                    cloudinaryImageId
                }
                alt="logo"
            />
            <h3>{name}</h3>
            <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</h4>
            <h4>{avgRating}</h4>
            <h4>{areaName}</h4>
        </div>
    );
};

export default RestaurantCard;