import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/DashBoard/DashBoard";
import { Loginpage } from "./Pages/LoginPage/Loginpage";
import { MyProfile } from "./Pages/MyProfile/MyProfile";
import { ProductsPage } from "./Pages/ProductsPage";
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<DashBoard />}>
        <Route path="/dashboard/myprofile" element={<MyProfile />} />
        <Route path="/dashboard/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};
