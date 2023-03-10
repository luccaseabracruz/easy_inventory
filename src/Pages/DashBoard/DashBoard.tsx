
import { MenuNavigation, DivPai, RenderPage } from './styles';
import Retrato from '../../assets/user.png';
import { Outlet, Link, useNavigate, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { UserContext } from '../../provides/UserContext';
import { useContext } from 'react';
import {api} from '../../services/api';


export const DashBoard = () => {
  const navigate = useNavigate();
  const { checkUser,user,userlogout } = useContext(UserContext);

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
  console.log(user?.avatar);

  return (
    <DivPai>
      <MenuNavigation>
        <div className="image">
          {user?.avatar ? <img src={user.avatar}/> : <img src={Retrato} />}
          <h1>{user?.name} <button onClick={userlogout}>Sair</button></h1>
        </div>
        <ul>
          <li onClick={() => navigate("/dashboard/myprofile")}> Meu Perfil</li>
          <li onClick={() => navigate("/dashboard/products")}>Produtos</li>
          <li onClick={() => navigate("/dashboard/products")}>Estatísticas</li>
        </ul>
      </MenuNavigation>

          <RenderPage>
            <Outlet />
          </RenderPage>
        </DivPai>
    
  );
};
