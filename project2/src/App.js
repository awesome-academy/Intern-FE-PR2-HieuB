import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";

function App() {
    return (
        <BrowserRouter>
            <Routes></Routes>
            <ToastContainer></ToastContainer>
        </BrowserRouter>
    );
}

export default App;
