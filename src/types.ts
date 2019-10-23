export interface HotelData {
    id: string,
    name: string,
    city: string,
    price: number,
    images: string[],
    date_start: string,
    date_end: string,
    stars: number,
    rating: number,
    description: string
}

export interface ReviewData {
    name: string,
    comment: string,
    positive: boolean
}