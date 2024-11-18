import Header from './components/Header/Header.jsx'
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signin from './pages/Signin.jsx'
import { ProductsSection } from './pages/Products.jsx';

function App() {
    return (
        <>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/cadastro' element={<Signin />}></Route>
                        <Route path='/produtos' element={<ProductsSection/>}></Route>
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </>
    );
}
export default App;