
import { MenuNavigation, DivPai, RenderPage } from './styles';
import Retrato from '../../assets/retrato.svg';
import { Outlet, Link, useNavigate, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { UserContext } from '../../provides/UserContext';
import { useContext } from 'react';
import {api} from '../../services/api';


export const DashBoard = () => {
  const navigate = useNavigate();
  const { checkUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      const id = localStorage.getItem('@user');
      async function checkToken(){
        try {
          const response = await api.get(`users/${id}`,{headers:{
            Authorization: `Bearer ${token}`
          }})
          navigate('/dashboard/myprofile');
        } 
        catch (errors) {
            localStorage.clear();
            navigate('/')
          }
        }
        checkToken();
 
    }else{
      navigate('/');
    }

  }, [])

  return (
    
      
        <DivPai>
          <MenuNavigation>
            <div className="image">
              <img src={Retrato} />
              <h1>Nome do Admin</h1>
            </div>
            <ul>
              <li onClick={() => navigate("/dashboard/myprofile")}> Meu Perfil</li>
              <li onClick={() => navigate("/dashboard/products")}>Produtos</li>
              <li onClick={() => navigate("/dashboard/products")}>Criar Produto</li>
              <li onClick={() => navigate("/dashboard/category")}>
                Buscar Categorias
              </li>
            </ul>
          </MenuNavigation>

          <RenderPage>
            <Outlet />
          </RenderPage>
        </DivPai>
    
  );
};
