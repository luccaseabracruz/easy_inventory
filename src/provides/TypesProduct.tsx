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
    filteredProducts: IProduct[];
    searchProduct: (data: ISerchData) => void;
    search: string;
    cleanSearch: () => void;
    addProduct: (product: IProduct) => void;
    subtractProduct: (product: IProduct) => void
}

export interface ISerchData{
    inputValue: string;
}