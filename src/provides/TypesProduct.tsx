import { ReactNode } from "react";

export interface IDefaultProviderProps {
    children: ReactNode;
}

export interface IProduct{
    name: string;
    image: string;
    price: string;
    category: string;
    qtd: string;
    id: number;
}

export interface IProductsContext{
    products: IProduct[];
}
