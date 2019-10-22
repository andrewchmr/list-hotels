import React from "react";
import {ReviewData} from "../types";

function Review(props: ReviewData) {
    const {name, comment, positive} = props;
    return <div><h1>{name}</h1><h2>{comment}</h2></div>
}

export default Review;