import React, {useState} from 'react';
import axios from 'axios';
import Hotel from "./Hotel";
import {apiUrl} from "../config";
import {HotelData} from "../types";

const ListHotels: React.FC = () => {
    const [hotels, setHotels] = useState<HotelData[]>([]);

    function loadHotels() {
        axios.get(`${apiUrl}/hotels?count=5`)
            .then((res: any) => setHotels(res.data))
            .catch((error) => console.log(error));
    }

    return (
        <div>
            <button onClick={() => loadHotels()}>Load Hotels</button>
            {hotels.map((hotel) => <Hotel key={hotel.id} {...hotel}/>)}
        </div>
    );
};

export default ListHotels;
