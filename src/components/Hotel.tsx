import React, {useState} from "react";
import axios from "axios";
import {apiUrl} from "../config";
import {HotelData, ReviewData} from "../types";
import Review from "./Review";
import placeholder from '../placeholder.jpg';

function Hotel(props: HotelData) {
    const [reviews, setReviews] = useState<ReviewData[]>([]);
    const [showReviews, setShowReviews] = useState<boolean>(false);

    function loadReview(hotelId: string) {
        setShowReviews(true);
        axios.get(`${apiUrl}/reviews?hotel_id=${hotelId}`)
            .then(res => setReviews(res.data))
            .catch((error) => console.log(error));
    }

    function hideReviews() {
        setShowReviews(false);
        setReviews([]);
    }

    const ReviewsList = () => {
        if (reviews.length > 0) {
            return <div>{reviews.map((review, index) =>
                <Review key={index} {...review}/>)}</div>
        } else {
            return <p>No reviews</p>
        }
    };

    const ReviewsSection = () => {
        const {id} = props;
        if (!showReviews) {
            return <button onClick={() => loadReview(id)}>Show review</button>
        } else {
            return <div>
                <button onClick={() => hideReviews()}>Hide review</button>
                <ReviewsList/></div>
        }
    };

    const {name, city, price, images, data_start, data_end, stars, rating, description} = props;
    return <div className={'container'}>
        <h1>{name}</h1>
        <h2>{city}</h2>
        <img width={200} height={200} src={placeholder}/>
        <ReviewsSection/>
    </div>
}

export default Hotel;