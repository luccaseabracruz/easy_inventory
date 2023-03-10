
import { ProductsContext } from '../../provides/ProductsContext';
import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { IProduct,IStatic, IStaticProductsExpencie } from '../../provides/TypesProduct';

export const StaticPage = () => {
    const { products } = useContext(ProductsContext);
    const [data,setData] = useState([] as IStatic[]);
    const [productExpencie,setExpencie] = useState([] as IStaticProductsExpencie[])
    
    useEffect(() => {
        
        const category: IStatic[] = [];
        const price: IStaticProductsExpencie[] = [];

        products.map(element =>{
           
            category.push({name:element.name,quantidade:element.qtd})
        })
        products.map(element =>{
           
            price.push({name:element.name,preço:element.price})
        })

       
        setData(category);
        setExpencie(price)
    }, []);

    return (
        <>
            <h1>Produto que tem mais quantidade no estoque</h1>
            <BarChart width={730} height={250}  data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantidade" fill="#8884d8" />
               
            </BarChart>
            <br/><br/>


            <h1>Produto mais caro do estoque</h1>
            <BarChart width={730} height={250}  data={productExpencie}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="preço" fill="#8884d8" />
               
            </BarChart>
        </>
    )
}