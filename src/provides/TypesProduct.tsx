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
export interface IStatic{
    name:string;
    quantidade:string;
}
export interface IStaticProductsExpencie{
    name:string;
    preço:string;
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
    openEditProductModalFunction: (product: IProduct) => void;
    editProduct: (product: IProduct, data: IProduct) => Promise<void>;
    openCreateProductModal: boolean;
    setOpenCreateProductModal: React.Dispatch<React.SetStateAction<boolean>>;
    openRemoveProductModal: boolean;
    setOpenRemoveProductModal: React.Dispatch<React.SetStateAction<boolean>>;
    openRemoveProductModalFunction: (product: IProduct) => void;
    createProduct: (data: IProduct) => Promise<void>;
    deleteProduct: (product: IProduct) => Promise<void>;
}

export interface ISerchData{
    inputValue: string;
}

export interface IModalEditProductProps{
    product: IProduct;
}