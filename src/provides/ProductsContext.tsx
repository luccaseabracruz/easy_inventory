import { createContext, useEffect, useState } from "react";
import { IDefaultProviderProps, IProduct, IProductsContext, ISerchData } from "./TypesProduct";
import { api } from "../services/api";

export const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

export const ProductsProvider = ({children}: IDefaultProviderProps) => {

    const [products, setProducts] = useState([] as IProduct[]);
    const [filteredProducts, setFilteredProducts] = useState([] as IProduct[]);
    const [search, setSearch] = useState('');

    const getAllProducts = async () => {
        try {
            const token = localStorage.getItem('@TOKEN');
    
            const response = await api.get('products', {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            
            setProducts(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    const searchProduct = (data: ISerchData) => {
        const currentSearch = data.inputValue;
        setFilteredProducts(products.filter((product) => 
            product.name.toLowerCase().includes(currentSearch.toLowerCase())
        ));

        setSearch(currentSearch)
    };

    const cleanSearch = () => {
        setFilteredProducts([]);
        setSearch('');
    }



    //useEffect para buscar produtos
    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <ProductsContext.Provider value={{products, filteredProducts, searchProduct, search, cleanSearch}}>
            {children}
        </ProductsContext.Provider>
    )
}