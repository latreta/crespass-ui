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

export interface Usuario {
    id?: number;
    email: string;
    password: string;
    confirmPassword: string;
    
}