export interface OrderItem{
    productId: number;
    quantity: number;
    price: number;
}

export interface Order{
    id?: number;
    orderDate?: string;
    customerName: string;
    items: OrderItem[];
    totalPrice: number;
}