import React from "react";
import axios from "axios";
import {apiUrl} from "../config";
import {HotelData, ReviewData} from "../types";
import Review from "./Review";

interface HotelState {
    reviews: ReviewData[];
    showReviews: boolean
}

class Hotel extends React.Component<HotelData, HotelState> {

    constructor(props: HotelData) {
        super(props);

        this.state = {
            reviews: [],
            showReviews: false
        }
    }

    loadReview(hotelId: string) {
        this.setState({showReviews: true});
        axios.get(`${apiUrl}/reviews?hotel_id=${hotelId}`)
            .then(res => this.setState({reviews: res.data}))
            .catch((error) => console.log(error));
    }

    hideReviews() {
        this.setState({showReviews: false, reviews: []});
    }

    showReviewsSection() {
        const {id} = this.props;
        if (!this.state.showReviews) {
            return <button onClick={() => this.loadReview(id)}>Show review</button>
        } else {
            return <div>
                <button onClick={() => this.hideReviews()}>Hide review</button>
                {this.state.reviews.map((review, index) => <Review key={index} {...review}/>)}</div>
        }
    }

    render() {
        const {name, city, price, images, data_start, data_end, stars, rating, description} = this.props;
        return <div>
            <h1>{name}</h1>
            <h2>{city}</h2>
            {this.showReviewsSection()}
        </div>
    }
}

export default Hotel;