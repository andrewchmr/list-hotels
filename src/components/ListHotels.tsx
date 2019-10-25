import React, {useState} from 'react';
import axios from 'axios';
import Hotel from "./Hotel";
import {apiUrl} from "../config";
import {HotelData} from "../types";

const ListHotels: React.FC = () => {
    const [hotels, setHotels] = useState<HotelData[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    function loadHotels() {
        setLoading(true);
        axios.get(`${apiUrl}/hotels?count=5`)
            .then((res: any) => handleResponse(res))
            .catch((error) => handleError(error));
    }

    function handleResponse(res: any) {
        error && setError('');
        setHotels(res.data);
        setLoading(false);
    }

    function handleError(error: string) {
        setHotels([]);
        setError("An error occurred");
        setLoading(false);
        console.log(error);
    }

    const Error = () => {
        return error ? <div className={'msg-box'}>
            <div className={'error'}>{error}</div>
        </div> : null;
    };

    const Spinner = () => {
        return loading ? <div className={'loader loader-big'}/> : null;
    };

    const LoadButton = () => {
        return <div className={'text-align mt-60 mb-40'}>
            <button onClick={() => loadHotels()} className="button">Load Hotels</button>
        </div>
    };

    const HotelsList = () => {
        return <ul className={'list-hotels'}>{hotels.map((hotel) => <Hotel key={hotel.id} {...hotel}/>)}</ul>
    };

    return (
        <div className={'container'}>
            <LoadButton/>
            <Error/>
            <Spinner/>
            <HotelsList/>
        </div>
    );
};

export default ListHotels;
