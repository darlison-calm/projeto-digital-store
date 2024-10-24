import 'bootstrap/dist/css/bootstrap.min.css';
import './header.style.css'
import logo from '../../assets/logo-header.svg'
import '@globalStyles/ColorsVariables.css'
import React, { useState } from 'react';
import { Menu, Search} from 'lucide-react';
import { MobileMenuOptions } from './MobileMenuOptions';
import { ShoppingCartButton } from './shoppingCart';
import EntrarECadastroButtons from './EntrarECadastroButtons';
import SearchBar from './SearchBar'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <>
      <nav className="navbar navbar-light bg-white py-3">
        <div className="d-flex w-100 justify-content-between px-3">
          {/* LEFT SECTION\ */}
          <button className="btn btn-link p-0 me-2 d-lg-none" aria-label="Menu" onClick={ toogleMenu }>
            <Menu className="text-dark" size={25}/>
          </button>
          <a className="navbar-brand m-0 text-danger fw-bold d-flex justify-content-center" href="/">
            <img src={ logo } alt="" className="w-image-size"/>
          </a>

          {/* RIGHT SECTION */}
          <div className="d-flex align-items-center gap-4 right-section">
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