import {Route,Routes} from 'react-router-dom';
import {DashBoard} from './Pages/DashBoard/DashBoard'
import { MyProfile } from './Pages/MyProfile/MyProfile';


export const Router = ()=>{

    console.log("");
    return(
        <Routes>
            <Route path='/dashboard' element={<DashBoard/>}>
                <Route path='/dashboard/myprofile' element={<MyProfile/>}/>
            </Route>
        </Routes>

    )
}