import { createContext, useEffect, useState } from "react";
import { IDefaultProviderProps, IProduct, IProductsContext, ISerchData } from "./TypesProduct";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

export const ProductsProvider = ({children}: IDefaultProviderProps) => {

    const [products, setProducts] = useState([] as IProduct[]);
    const [filteredProducts, setFilteredProducts] = useState([] as IProduct[]);
    const [search, setSearch] = useState('');
    const [openEditProductModal, setOpenEditProductModal] = useState(false);
    const [selectedProduct, setSelectProduct] = useState({} as IProduct);
    const [openCreateProductModal, setOpenCreateProductModal] = useState(false);
    const [openRemoveProductModal, setOpenRemoveProductModal] = useState(false);

    const getAllProducts = async () => {
        try {
            const token = localStorage.getItem('@TOKEN');
    
            const response = await api.get('products', {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            
            setProducts(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const searchProduct = (data: ISerchData) => {
        const currentSearch = data.inputValue;
        setFilteredProducts(products.filter((product) => 
            product.name.toLowerCase().includes(currentSearch.toLowerCase())
        ));

        setSearch(currentSearch);
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
            console.log(error);
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

    const openEditProductModalFunction = (product: IProduct) => {
        setOpenEditProductModal(true);
        setSelectProduct(product);
    }
    const openRemoveProductModalFunction = (product: IProduct) => {
        setOpenRemoveProductModal(true);
        setSelectProduct(product);
    }

    const editProduct = async (product: IProduct, data: IProduct) => {
        try {
            const token = localStorage.getItem('@TOKEN')
            const response = await api.patch(`products/${product.id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success('Informações registradas');
            setOpenEditProductModal(false);
        } catch (error) {
            console.log(error)
        }
    }

    const createProduct = async (data: IProduct) => {
        try {
            const token = localStorage.getItem('@TOKEN')
            const response = await api.post(`products`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success('Produto criado');
            setOpenCreateProductModal(false);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (product: IProduct) => {
        try {
            const token = localStorage.getItem('@TOKEN')
            const response = await api.delete(`products/${product.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success('Produto removido');
            setOpenRemoveProductModal(false);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllProducts();
    }, [openEditProductModal, openCreateProductModal, openRemoveProductModal]);



    return (
        <ProductsContext.Provider value={{products, filteredProducts, searchProduct, search, cleanSearch, addProduct, subtractProduct, openEditProductModal, setOpenEditProductModal, selectedProduct, openEditProductModalFunction, editProduct, openCreateProductModal, setOpenCreateProductModal, openRemoveProductModal, setOpenRemoveProductModal, openRemoveProductModalFunction, createProduct, deleteProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}