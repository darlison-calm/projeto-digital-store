
const EntrarECadastroButtons = ({ button1Order, button2Order, className}) => {
  return (
    <div className={`buttons-container ${className || ''}`}>       
      <button type="button" className="btn background-primary text-light w-50" style={{ order: button1Order }}>
        Entrar
      </button>
      <button type="button" className="btn text-dark w-50 text-underline" style={{ order: button2Order }}>
        Cadastre-se
      </button>
    </div>
  );
};

export default EntrarECadastroButtons;