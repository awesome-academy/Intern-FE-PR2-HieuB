import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./Routes";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header></Header>
                <Routes></Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    );
}

export default App;
