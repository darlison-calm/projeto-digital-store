import React from 'react';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo-header.svg'

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-white fixed-top border-bottom">
      <div className="d-flex w-100  justify-content-between px-2">
        <button 
          className="btn btn-link p-0 me-2"
          aria-label="Menu"
        >
          <Menu className="text-dark" size={30} />
        </button>

        <a className="navbar-brand m-0 text-danger fw-bold" href="/">
            <img src={logo} alt="" className="w-60 w-md-50" />
        </a>

        <div className="d-flex align-items-center">
          <button 
            className="btn btn-link p-0 me-3"
            aria-label="Search"
          >
            <Search className="text-dark" size={20} />
          </button>
          
          <button 
            className="btn btn-link p-0 position-relative"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="text-dark" size={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              2
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;