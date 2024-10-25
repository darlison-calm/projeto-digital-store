import '@globalStyles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.style.css'
import logo from '../../assets/logo-header.svg'
import '@globalStyles/ColorsVariables.css'
import React, { useState } from 'react';
import { Menu} from 'lucide-react';
import { MobileMenuOptions } from './MobileMenuOptions';
import { ShoppingCartButton } from './shoppingCart';
import EntrarECadastroButtons from './EntrarECadastroButtons';
import {SearchBar} from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <>
      <nav className="navbar navbar-light bg-white py-3">
        <div className="d-flex w-100 align-items-start justify-content-center">
          {/* LEFT SECTION\ */}
          <button className="btn btn-link p-0 me-2 d-lg-none" aria-label="Menu" onClick={ toogleMenu }>
            <Menu className="text-dark" size={25}/>
          </button>
            <div className='d-flex flex-column gap-4'>
              <img src={logo} alt="" className='w-image-size'/>
              <div className=" d-none d-lg-flex gap-4">
                <a href="/" className="text-decoration-none">Home</a>
                <a href="/produtos" className="text-decoration-none">Produtos</a>
                <a href="/categorias" className="text-decoration-none">Categorias</a>
                <a href="/meus-pedidos" className="text-decoration-none">Meus Pedidos</a>
              </div>
            </div>
          <SearchBar className="d-none d-lg-block me-5"/>
          {/* RIGHT SECTION */}
          <div className="d-flex align-items-center gap-2 right-section">
            <EntrarECadastroButtons button1Order={1} button2Order={0} className="pe-5 d-none d-lg-flex gap-2"/>
            <ShoppingCartButton/>
          </div>
        </div>
        {isMenuOpen && <MobileMenuOptions closeOptions={ toogleMenu }/>}
      </nav>
    </>
  );
};

export default Header;