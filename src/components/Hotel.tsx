import React, {useState} from "react";
import axios from "axios";
import {apiUrl} from "../config";
import {HotelData, ReviewData} from "../types";

function Hotel(props: HotelData) {
    const [reviews, setReviews] = useState<ReviewData[] | null>(null);
    const [showReviews, setShowReviews] = useState<boolean>(false);

    function loadReview(hotelId: string) {
        setShowReviews(true);
        axios.get(`${apiUrl}/reviews?hotel_id=${hotelId}`)
            .then(res => setReviews(res.data))
            .catch((error) => console.log(error));
    }

    function hideReviews() {
        setShowReviews(false);
        setReviews(null);
    }

    function getGermanFormatDate(date: string): string {
        return new Date(date).toLocaleDateString('de-DE');
    }

    const ReviewsList = () => {
        if (reviews) {
            if (reviews.length > 0) {
                return <ul className={'list-reviews'}>{reviews.map((review, index) =>
                    <Review key={index} {...review}/>)}</ul>
            } else {
                return <div className={'list-reviews--empty'}><p className={'title'}>No reviews</p>
                </div>
            }
        } else {
            return null;
        }
    };

    const Review = (review: ReviewData) => {
        const {name, comment, positive} = review;
        const iconClass = positive ? 'plus' : 'minus';
        return <div className={'review'}>
            <li>
                <div className={'review__icon'}>
                    <i className={`fa fa-${iconClass}-circle`}/></div>
                <div className={'review__content'}>
                    <p className={'title'}>{name}</p>
                    <p>{comment}</p>
                </div>
            </li>
        </div>
    };

    const Button = () => {
        const {id} = props;
        if (!showReviews) {
            return <div>
                <button className={'button button--center'} onClick={() => loadReview(id)}>Show
                    reviews
                </button>
            </div>
        } else {
            return <div>
                <button className={'button button--center'} onClick={() => hideReviews()}>Hide reviews</button>
            </div>
        }
    };

    const Stars = () => {
        const starTotal = 5;
        const starPercentage = (stars / starTotal) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;

        return <div className="stars">
            <div className="stars--outer">
                <div className="stars--inner" style={{width: starPercentageRounded}}/>
            </div>
        </div>
    };

    const HotelDescription = () => {
        return <div className={'hotel-desc'}>
            <div>
                <p className={'title'}>{name}</p>
                <Stars/>
            </div>
            <p>{city} - {country}</p>
            <p className={'hotel-desc__description'}>{description}</p>
            <div className={'hotel-desc__down-section'}>
                <Button/>
                <div className={'hotel-desc__price-date'}>
                    <p className={'hotel-desc__price'}>{price} &euro;</p>
                    <p>{getGermanFormatDate(date_start)} - {getGermanFormatDate(date_end)}</p>
                </div>
            </div>
        </div>
    };

    const Image = () => {
        return <div className={'image-section image-section--ratio-4-3'}/>
    };

    const Wrapper = (props: any) => {
        return <div className={'hotel__wrapper'}>{props.children}</div>
    };

    const {name, city, price, date_start, date_end, stars, country, description} = props;
    return <li>
        <Wrapper>
            <Image/>
            <HotelDescription/>
        </Wrapper>
        <ReviewsList/>
    </li>
}

export default Hotel;