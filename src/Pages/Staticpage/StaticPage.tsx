
import { ProductsContext } from '../../provides/ProductsContext';
import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Customized } from 'recharts';
import { IProduct, IStatic, IStaticProductsExpencie } from '../../provides/TypesProduct';
import { ContainerStatistic } from './styles'

export const StaticPage = () => {
    const { products } = useContext(ProductsContext);
    const [data, setData] = useState([] as IStatic[]);
    const [productExpencie, setExpencie] = useState([] as IStaticProductsExpencie[])

    useEffect(() => {

        const category: IStatic[] = [];
        const price: IStaticProductsExpencie[] = [];

        products.map(element => {

            category.push({ name: element.name, quantidade: element.qtd })
        })
        products.map(element => {

            price.push({ name: element.name, preço: element.price })
        })


        setData(category);
        setExpencie(price)
    }, []);

    return (
        <ContainerStatistic>
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
            </section>
        </ContainerStatistic>
    )
}