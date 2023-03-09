import { ToastContainer } from "react-toastify";
import { UserProvider } from "./provides/UserContext";
import { Router } from "./routes";

function App() {

  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;
