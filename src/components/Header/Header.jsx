import './Header.css'
import logo from '../../assets/logoDigital.svg'
import miniCart from '../../assets/mini-cart.svg'
import { Button } from '../Button'

export function Header() {
    return (
        <>
            <header className='header'>
                <div className='header-top'>
                    <h1><img src={logo} alt="" /></h1>
                    <input type="text" placeholder='Pesquisar produto...' />
                    <a href="">Cadastre-se</a>
                    <Button>Entrar</Button>
                    <div className='cart-notification'>
                        <div className='notification'>0</div>
                        <img src={miniCart} alt="" className='cart-icon' />
                    </div>
                </div>
                <nav className='menu'>
                    <a href="Home" id='home'>Home</a>
                    <a href="">Produtos</a>
                    <a href="">Categorias</a>
                    <a href="">Meus Pedidos</a>
                </nav>
            </header>
        </>
    );
};