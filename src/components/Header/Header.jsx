import '@globalStyles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.style.css'
import logo from '../../assets/logo-header.svg'
import '@globalStyles/ColorsVariables.css'
import React, { useState } from 'react';
import { ShoppingCartButton } from './shoppingCart';
import EntrarECadastroButtons from './EntrarECadastroButtons';
import {SearchBar} from './SearchBar';

const Header = () => {
  return (
    <>
      <header className="d-flex flex-column py-4">
          {/* TOP */}
            <div className='d-flex justify-content-around'>
              <img src={logo} alt="" className='logo'/>
              <SearchBar className=""/>
              <div className="d-flex">
                <EntrarECadastroButtons button1Order={2} button2Order={0} className="gap-2"/>
                <ShoppingCartButton/>
              </div>
            </div>
          {/* BOTTOM */}
          <div className="d-flex gap-4 links py-4">
                <a href="/" className="text-decoration-none">Home</a>
                <a href="/produtos" className="text-decoration-none">Produtos</a>
                <a href="/categorias" className="text-decoration-none">Categorias</a>
                <a href="/meus-pedidos" className="text-decoration-none">Meus Pedidos</a>
          </div>
      </header>
    </>
  );
};

export default Header;