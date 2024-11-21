import '@globalStyles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.style.css'
import logo from '../../assets/logo-header.svg'
import '@globalStyles/ColorsVariables.css'
import { ShoppingCartButton } from './shoppingCart';
import EntrarECadastroButtons from './EntrarECadastroButtons';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';

const Header = ({
  showSearchBar = true,
  showShoppingCart = true,
  showHeader2 = true
}) => {
  const userName = localStorage.getItem('userName');  // O nome do usuário está salvo aqui
  return (
    <>
      <header className="d-flex flex-column">
        <div className="header1">
          <a href='/' className='header_logo'><img src={logo} alt="logo"/></a>
          {showSearchBar && <SearchBar className={"header1searchBar"} />}
          {!userName && <EntrarECadastroButtons button1Order={2} button2Order={1} className="gap-4" />}
          {showShoppingCart && <ShoppingCartButton />}
          {userName && <div className="user_info_header">
            <button className="image_user_button" style={{ backgroundImage: 'url(src/assets/user.svg)' }} />
            {userName && <span className="user_name">Olá, {userName}</span>}
          </div>}
        </div>

        {showHeader2 && (
          <div className="header2">
            <Link to='/' className="text-decoration-none">Home</Link>
            <Link to="/produtos" className="text-decoration-none">Produtos</Link>
            <Link to="/categorias" className="text-decoration-none">Categorias</Link>
            <Link to="/meus-pedidos" className="text-decoration-none">Meus Pedidos</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;