import React, {useState} from 'react';
import axios from 'axios';
import Hotel from "./Hotel";
import {apiUrl} from "../config";
import {HotelData} from "../types";

const ListHotels: React.FC = () => {
    const [hotels, setHotels] = useState<HotelData[]>([]);
    const [error, setError] = useState('');

    function loadHotels() {
        axios.get(`${apiUrl}/hotels?count=5`)
            .then((res: any) => handleResponse(res))
            .catch((error) => handleError(error));
    }

    function handleResponse(res: any) {
        error && setError('');
        setHotels(res.data)
    }

    function handleError(error: string) {
        setHotels([]);
        setError("An error occurred");
        console.log(error);
    }

    const Error = () => {
        return error ? <div>{error}</div> : null;
    };

    return (
        <div>
            <button onClick={() => loadHotels()}>Load Hotels</button>
            <Error/>
            {hotels.map((hotel) => <Hotel key={hotel.id} {...hotel}/>)}
        </div>
    );
};

export default ListHotels;
