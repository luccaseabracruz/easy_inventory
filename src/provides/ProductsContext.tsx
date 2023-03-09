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

    const modifyQuantity = async (newQuantity: string, productId: number) => {
        const token = localStorage.getItem('@TOKEN');
        try {
            const response = await api.patch(`products/${productId}`, {qtd: newQuantity}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const addProduct = (product: IProduct) => {
        const productIndex = products.findIndex((currentProduct) => currentProduct.id === product.id);
        const newProduct: IProduct = {...product};
        const quantity = String(Number(newProduct.qtd) + 1);
        modifyQuantity(quantity, product.id);
        newProduct.qtd = quantity;

        const newArray = [...products];
        newArray.splice(productIndex, 1, newProduct);
        
        setProducts(newArray);
        
    }
    const subtractProduct = (product: IProduct) => {
        const productIndex = products.findIndex((currentProduct) => currentProduct.id === product.id);
        const newProduct: IProduct = {...product};
        const quantity = String(Number(newProduct.qtd) - 1);
        modifyQuantity(quantity, product.id);
        newProduct.qtd = quantity;

        const newArray = [...products];
        newArray.splice(productIndex, 1, newProduct);
        
        setProducts(newArray);
        
    }


    useEffect(() => {
        getAllProducts();
    }, []);



    return (
        <ProductsContext.Provider value={{products, filteredProducts, searchProduct, search, cleanSearch, addProduct, subtractProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}