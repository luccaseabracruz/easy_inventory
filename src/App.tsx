import { ToastContainer } from "react-toastify";
import { UserProvider } from "./provides/UserContext";
import { Router } from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router />
    </UserProvider>
  );
}

export default App;
