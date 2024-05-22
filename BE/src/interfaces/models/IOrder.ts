import mongoose from "mongoose";

export enum OrderState {
    pending = "pending", confirmed = "confirmed", shipped = "shipped", cancelled = "cancelled"
}

export interface IOrderProduct {
    order_item_id: string;
    product_id: mongoose.Types.ObjectId | string;
    product_name: string;
    product_quantity: number;
    product_price: number;
    product_subtotal: number;
    product_discount?: number;
    product_total: number;
}

export enum PaymentMethod {
    CreditCard = "credit_card",
    PayPal = "paypal",
    Other = "other",
}

export enum PaymentStatus {
    Authorized = "authorized",
    Processed = "processed",
    Failed = "failed",
}
export interface IOrder {
    order_user_id: mongoose.Types.ObjectId | string;
    order_shipping: {
        street: string;
        city: string;
        state: string;
        zipcode: string;
        country: string;
    };
    order_payment: {
        payment_id: string;
        payment_method: PaymentMethod;
        payment_amount: number;
        payment_status: PaymentStatus;
        payment_date: Date;
    };
    order_products: IOrderProduct[];
    order_tracking_number: string;
    order_state: OrderState;
}
