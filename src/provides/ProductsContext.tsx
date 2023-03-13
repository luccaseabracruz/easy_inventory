import { createContext, useEffect, useState } from "react";
import { IDefaultProviderProps, IProduct, IProductsContext, ISalesMoreProducts } from "./TypesProduct";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { ISerchData } from "../components/InputSearch/types";

export const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

export const ProductsProvider = ({children}: IDefaultProviderProps) => {

    const [products, setProducts] = useState([] as IProduct[]);
    const [filteredProducts, setFilteredProducts] = useState([] as IProduct[]);
    const [search, setSearch] = useState('');
    const [openEditProductModal, setOpenEditProductModal] = useState(false);
    const [selectedProduct, setSelectProduct] = useState({} as IProduct);
    const [openCreateProductModal, setOpenCreateProductModal] = useState(false);
    const [openProductModal, setOpenProductModal] = useState(false);
    const [openRemoveProductModal, setOpenRemoveProductModal] = useState(false);
    const [totalActive, setTotalActive] = useState(0);
    const [sales,setSales] = useState([] as ISalesMoreProducts[]);

    const getAllProducts = async () => {
        try {
            const token = localStorage.getItem('@TOKEN');
    
            const response = await api.get('products', {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            
            setProducts(response.data);
            console.log(products);
            
        } catch (error) {
            console.log(error);
        }
    }

    const searchProduct = (data: ISerchData) => {
        const currentSearch = data.inputValue;
        setFilteredProducts(products.filter((product) => 
            product.name.toLowerCase().includes(currentSearch.toLowerCase()) || product.category.toLowerCase().includes(currentSearch.toLowerCase())
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
    const subtractProduct = async (product: IProduct) => {
        const token = localStorage.getItem('@TOKEN');

        products.map(element=>{
            if(element.id === product.id){
                
                const newSales = element.sales + 1;
                element.sales = newSales;

                const data = {
                    sales:newSales
                }
                    const response = api.patch(`products/${product.id}`,data,{headers:{
                        Authorization: `Bearer ${token}`
                    }})
                    console.log(response);
                    console.log("aqui");
            }
        })

        const productIndex = products.findIndex((currentProduct) => currentProduct.id === product.id);
        const newProduct: IProduct = {...product};
        const quantity = String(Number(newProduct.qtd) - 1);
        modifyQuantity(quantity, product.id);
        newProduct.qtd = quantity;

        const newArray = [...products];
        newArray.splice(productIndex, 1, newProduct);
        
        setProducts(newArray);
        
    }

    const openProductModalFunction = (product: IProduct) => {
        setSelectProduct(product);
        setOpenProductModal(true)
    }

    const openEditProductModalFunction = () => {
        setOpenProductModal(false);
        setOpenEditProductModal(true);
    }
    const openRemoveProductModalFunction = () => {
        setOpenProductModal(false);
        setOpenRemoveProductModal(true);
    }

    const editProduct = async ( data: IProduct) => {
        try {
            const token = localStorage.getItem('@TOKEN')
            const response = await api.patch(`products/${selectedProduct.id}`, data, {
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

    const deleteProduct = async () => {
        try {
            const token = localStorage.getItem('@TOKEN')
            const response = await api.delete(`products/${selectedProduct.id}`, {
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


    const calculateTotalActive = () => {
        const total = products.reduce((previousValue, currentValue) =>
            previousValue + (Number(currentValue.price) * Number(currentValue.qtd)), 0
        )

        setTotalActive(total);
    }


    useEffect(() => {
        getAllProducts();
    }, [openEditProductModal, openCreateProductModal, openRemoveProductModal]);

    useEffect(() => {
        calculateTotalActive()
    }, [products])



    return (
        <ProductsContext.Provider value={{
            products,
            filteredProducts,
            searchProduct,
            search,
            cleanSearch,
            addProduct,
            subtractProduct,
            openEditProductModal,
            setOpenEditProductModal,
            selectedProduct,
            openEditProductModalFunction,
            editProduct,
            openCreateProductModal,
            setOpenCreateProductModal,
            openRemoveProductModal,
            setOpenRemoveProductModal,
            openRemoveProductModalFunction,
            createProduct,
            deleteProduct,
            totalActive,
            openProductModal,
            setOpenProductModal,
            openProductModalFunction,
            sales
            }}>
            {children}
        </ProductsContext.Provider>
    )
}