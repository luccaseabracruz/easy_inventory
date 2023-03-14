import { ReactNode } from "react";
import { ISerchData } from "../components/InputSearch/types";

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
    description?:string;
    sales:number;

}
export interface IStatic{
    name:string;
    quantidade:string;
}
export interface IStaticProductsExpencie{
    name:string;
    preço:string;
}
export interface ISalesMoreProducts{
    name:string;
    sales:number;
    id:number;
}

export interface IProductsContext{
    products: IProduct[];
    filteredProducts: IProduct[];
    searchProduct: (data: ISerchData) => void;
    search: string;
    cleanSearch: () => void;
    addProduct: (product: IProduct) => void;
    subtractProduct: (product: IProduct) => void;
    openEditProductModal: boolean;
    setOpenEditProductModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedProduct: IProduct;
    openEditProductModalFunction: () => void;
    editProduct: (data: IProduct) => Promise<void>;
    openCreateProductModal: boolean;
    setOpenCreateProductModal: React.Dispatch<React.SetStateAction<boolean>>;
    openRemoveProductModal: boolean;
    setOpenRemoveProductModal: React.Dispatch<React.SetStateAction<boolean>>;
    openRemoveProductModalFunction: () => void;
    createProduct: (data: IProduct) => Promise<void>;
    deleteProduct: () => Promise<void>;
    totalActive: number;
    sales:ISalesMoreProducts[];
    openProductModal: boolean;
    setOpenProductModal: React.Dispatch<React.SetStateAction<boolean>>;
    openProductModalFunction: (product: IProduct) => void;
}



export interface IModalEditProductProps{
    product: IProduct;
}

