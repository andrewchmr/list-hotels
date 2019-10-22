import React from 'react';
import axios from 'axios';
import Hotel from "./Hotel";
import {apiUrl} from "../config";
import {HotelData} from "../types";

interface ListHotelsState {
    hotels: HotelData[]
}

class ListHotels extends React.Component<{}, ListHotelsState> {

    constructor(props: any) {
        super(props);

        this.state = {
            hotels: []
        }
    }

    loadHotels() {
        axios.get(`${apiUrl}/hotels`)
            .then(res => this.setState({hotels: res.data}))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.loadHotels()}>Load Hotels</button>
                {this.state.hotels.map((hotel) => <Hotel key={hotel.id} {...hotel}/>)}
            </div>
        );
    }
}

export default ListHotels;
