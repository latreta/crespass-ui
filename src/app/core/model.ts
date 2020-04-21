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
export interface Usuario {
    id?: number;
    email: string;
    password: string;
    confirmPassword: string;    
}

export interface Category {
    id?: number;
    name: string;
}

export interface SignupForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
