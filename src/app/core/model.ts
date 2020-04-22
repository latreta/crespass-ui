export interface Product {
    id?: number;
    store?: string;
    category?: string;
    brand: string;
    name: string;
    description: string;
    status: string;
    quality: string;
    originalPrice: string;
    quantity: number;
    weight: number;
    height: number;
    width: number;
    targets: string;
    createdAt: string;
}
export interface Brand {
    id?: number;
    name: string;
}
export interface Category {
    id?: number;
    name: string;
}

export interface Address {
    id?: number;
    user_id: number;
    cep: string;
    state: string;
    city: string;
    address: string;
    complement?: string;
    number: string;
    neighborhood: string;
}

export interface User {
    name: string;
    lastName: string;
    email: string;
    address: Address;
    password: string;
}

export interface SignupForm extends User {
    password_confirmation: string;
}
