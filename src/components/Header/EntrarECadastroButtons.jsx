import { Link } from 'react-router-dom';


const EntrarECadastroButtons = ({ button1Order, button2Order, className }) => {
  return (
    <div className={`buttons-container d-flex ${className || ''}`}>
      <Link to='/login'>
        <button link type="button" className="btn background-primary text-light w-50" style={{ order: button1Order }}>
          Entrar
        </button>
      </Link>

      <Link to='/cadastro'>
        <button type="button" className="btn text-dark w-50 text-underline" style={{ order: button2Order }}>
          Cadastre-se
        </button>
      </Link>
    </div>
  );
};

export default EntrarECadastroButtons;