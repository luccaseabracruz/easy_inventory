
import { ProductsContext } from '../../provides/ProductsContext';
import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Customized } from 'recharts';
import { IProduct, ISalesMoreProducts, IStatic, IStaticProductsExpencie } from '../../provides/TypesProduct';
import { ContainerStatistic } from './styles'
import { api } from '../../services/api';

export const StaticPage = () => {
    const { products, totalActive,sales } = useContext(ProductsContext);
    const [data, setData] = useState([] as IStatic[]);
    const [productExpencie, setExpencie] = useState([] as IStaticProductsExpencie[]);
    const [sales2,setSales2] = useState([] as ISalesMoreProducts[]);
    

    useEffect(() => {
        

        const category: IStatic[] = [];
        const price: IStaticProductsExpencie[] = [];
        const moreSales: ISalesMoreProducts[] = [];

        products.map(element => {

            category.push({ name: element.name, quantidade: element.qtd })
        })
        products.map(element => {

            price.push({ name: element.name, preço: element.price })
        })
        
        const getAllProducts = async()=>{
            const token = localStorage.getItem('@TOKEN');
                const response = await api.get('products',{headers:{
                    Authorization: `Bearer ${token}`
                }})
                const array = [...response.data];
        
                array.map(element=>{

                    const values = element.sales;
                    if(values.length === 1){
                        moreSales.push({name:element.name,id:element.id,sales:0});
                    }else{
                        moreSales.push({name:element.name,id:element.id,sales:values.length-1});
                    }
                    
                })
                setSales2(moreSales);
        }

        getAllProducts();

        setData(category);
        setExpencie(price);
        setSales2(moreSales);
    }, []);

    return (
        <ContainerStatistic>

            <h1>Total em ativos: R${String(totalActive.toFixed(2)).split('.').join(',')}</h1>

            <h2>Produto que tem mais quantidade no estoque</h2>

            <section role='Produto mais no estoque'>
                <BarChart width={330} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="quantidade" fill="#312782" />

                </BarChart>
            </section>
            <br /><br />


            <h2>Produto mais caro do estoque</h2>
            <section role='Produto mais caro'>
                <BarChart width={330} height={250} data={productExpencie}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="preço" fill="#312782" />

                </BarChart>
            </section><br/><br/>


            <h2>Produto mais vendido do estoque</h2>
            <section role='Produto mais vendido'>
                <BarChart width={330} height={250} data={sales2}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#312782" />

                </BarChart>
            </section>
        </ContainerStatistic>
    )
}