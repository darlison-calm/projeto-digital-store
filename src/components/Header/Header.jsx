import '@globalStyles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.style.css'
import logo from '../../assets/logo-header.svg'
import '@globalStyles/ColorsVariables.css'
import React, { useState } from 'react';
import { ShoppingCartButton } from './shoppingCart';
import EntrarECadastroButtons from './EntrarECadastroButtons';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="d-flex flex-column align-items-start">
            <div className='d-flex justify-content-center top'>
              <div className="d-flex flex-column gap-4 layout">
                <img src={logo} alt="" className='logo'/>
                <div className="d-flex gap-4">
                <Link to='/' className="text-decoration-none">Home</Link>
                <Link to="/produtos" className="text-decoration-none">Produtos</Link>
                <Link to="/categorias" className="text-decoration-none">Categorias</Link>
                <Link to="/meus-pedidos" className="text-decoration-none">Meus Pedidos</Link>
                </div>
              </div>
              <SearchBar className=""/>
              <div className="d-flex justify-content-end gap-4">
                <EntrarECadastroButtons button1Order={2} button2Order={0} className="gap-4"/>
                <ShoppingCartButton/>
              </div>
            </div>
      </header>
    </>
  );
};

export default Header;