import 'bootstrap/dist/css/bootstrap.min.css';
import './homePage.style.css'
import '@globalStyles/ColorsVariables.css'
import tenisBanner from '/tenis-banner.png'
import ornamento from '/Ornament-11.png'
export const HomePageBanner = () => {
  return (
    <>
      <section className="homePageBanner px-5 d-flex align-items-center"> 
        <div className="banner d-flex flex-column">
          <p className='fw-bold'>Melhores ofertas personalizadas</p>
          <h1>Queima de <br /> estoque Nike&#128293;</h1>
          <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Temporibus libero excepturi delectus minima.</p>
          <button className='btn py-2'>Ver Ofertas</button>
        </div>
        <img src={tenisBanner} className='tenis-banner' alt="" />
        <img src={ornamento} className='ornamento 'alt="" />
      </section>
     
    </>
  )
}