export interface HotelData {
    id: string,
    name: string,
    city: string,
    price: number,
    images: string[],
    data_start: string,
    data_end: string,
    stars: number,
    rating: number,
    description: string
}

export interface ReviewData {
    name: string,
    comment: string,
    positive: boolean
}