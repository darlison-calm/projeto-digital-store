import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.style.css'
import logo from '../../assets/logo-header.svg'
import shoppingCart from '../../assets/mini-cart.svg';
import '@globalStyles/ColorsVariables.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-light bg-white py-3">
        {/* MOBILE VIEW */}
        <div className="d-flex w-100  justify-content-between px-3">
          <button 
            className="btn btn-link p-0 me-2 d-lg-none"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="text-dark" size={25} />
          </button>

          <a className="navbar-brand m-0 text-danger fw-bold d-flex justify-content-center" href="/">
              <img src={logo} alt="" className="w-60"/>
          </a>

          <div className="d-flex align-items-center pe-1">
            <button 
              className="btn btn-link p-0 me-2"
              aria-label="Search"
            >
              <Search className='color-light-gray-2' size={20} />
            </button>
            
            <button 
              className="btn btn-link p-0 position-relative"
              aria-label="Shopping cart"
            >
              <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '12px', padding: '0.2em 0.5em', top: '5px' }}>
                2
              </span>
              <img src={shoppingCart }size={18} />
            </button>
          </div>
        </div>
      </nav>
        {/* MOBILE MENU */}
        {isMenuOpen && (
          <>
          <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
          <div className="mobile-menu d-lg-none d-flex flex-column p-3 gap-3">
            <div className="links d-flex flex-column gap-2  ">
              <p className='mb-2'>Paginas</p>
              <a href="/" className="mobile-nav-link">Home</a>
              <a href="/produtos" className="mobile-nav-link">Produtos</a>
              <a href="/categorias" className="mobile-nav-link">Categorias</a>
              <a href="/meus-pedidos" className="mobile-nav-link">Meus Pedidos</a>
            </div>
              
            <div className="buttons-container">
              <hr />
              <button type="button" className="btn background-primary text-light w-50">Entrar</button>
              <button type="button" className="btn text-dark w-50">Cadastre-se</button>
            </div>
          </div>
          </>
      )}
    </>
  );
};

export default Header;