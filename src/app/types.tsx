export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
}

export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

export interface Filter {
    id: string;
    name: string;
}

export interface Filters {
    categories: Filter[];
    priceRanges: Filter[];
}