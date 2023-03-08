import { createContext, useEffect, useState } from "react";
import { IDefaultProviderProps, IProduct, IProductsContext } from "./@types";
import { api } from "../services/api";

export const ProductsContext = createContext<IProductsContext | null>(null);

export const ProductsProvider = ({children}: IDefaultProviderProps) => {

    const [products, setProducts] = useState([] as IProduct[]);

    const getAllProducts = async () => {
        const token = localStorage.getItem('@TOKEN');

        const response = await api.get('/products', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        setProducts(response.data)
    }


    //useEffect para buscar produtos
    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}