import { MenuNavigation, DivPai, RenderPage } from './styles';
import Retrato from '../../assets/retrato.svg';
import {Outlet,Link,useNavigate} from 'react-router-dom';

export const DashBoard = () => {
    const navigate = useNavigate();

return (
    <DivPai>

          <MenuNavigation>
            <div className='image'>
                <img src={Retrato}/>
                <h1>Nome do Admin</h1>
            </div>
            <ul>
                <li onClick={()=>navigate('/dashboard/myprofile')}> Meu Perfil</li>
                <li onClick={()=>navigate('/dashboard/products')}>Produtos</li>
                <li onClick={()=>navigate('/dashboard/products')}>Criar Produto</li>
                <li onClick={()=>navigate('/dashboard/category')}>Buscar Categorias</li>
            </ul>
        </MenuNavigation>


        <RenderPage>
        
            <Outlet/>
        </RenderPage>

    </DivPai>
)
}