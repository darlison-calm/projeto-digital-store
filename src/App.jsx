import Header from './components/Header/Header.jsx'
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Singin from './pages/Singin.jsx'


function App() {
    return (
        <>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/cadastro' element={<Singin />}></Route>
                    </Routes>
                    
                    <Footer />
                </div>
            </Router>
        </>
    );
}
export default App;