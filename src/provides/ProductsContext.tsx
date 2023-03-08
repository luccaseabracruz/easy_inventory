import { createContext, useEffect, useState } from "react";
import { IDefaultProviderProps, IProduct, IProductsContext } from "./TypesProduct";
import { api } from "../services/api";

export const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

export const ProductsProvider = ({children}: IDefaultProviderProps) => {

    const [products, setProducts] = useState([] as IProduct[]);

    const getAllProducts = async () => {
        try {
            const token = localStorage.getItem('@TOKEN');
    
            const response = await api.get('products', {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });

            console.log(response.data)
            
            // setProducts(response.data)
            
        } catch (error) {
            console.log(error)
        }
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