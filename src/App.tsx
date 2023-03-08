import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { ProductsProvider } from "./provides/ProductsContext";
import { UserProvider } from "./provides/UserContext";
import { Router } from "./routes";

function App() {

  return (
    <UserProvider>
      <ProductsProvider>
        <Router />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
