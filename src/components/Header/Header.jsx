import '@globalStyles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.style.css'
import logo from '../../assets/logo-header.svg'
import '@globalStyles/ColorsVariables.css'
import { ShoppingCartButton } from './shoppingCart';
import EntrarECadastroButtons from './EntrarECadastroButtons';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="d-flex flex-column">
          <div className="header1">
            <img src={logo} alt="" className='logo' />
            <SearchBar className={"header1searchBar"}/>
            <EntrarECadastroButtons button1Order={2} button2Order={1} className="gap-4" />
            <ShoppingCartButton />
          </div>

          <div className="header2">
              <Link to='/' className="text-decoration-none">Home</Link>
              <Link to="/produtos" className="text-decoration-none">Produtos</Link>
              <Link to="/categorias" className="text-decoration-none">Categorias</Link>
              <Link to="/meus-pedidos" className="text-decoration-none">Meus Pedidos</Link>
          </div>
      </header>
    </>
  );
};

export default Header;