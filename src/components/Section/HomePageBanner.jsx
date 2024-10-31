import 'bootstrap/dist/css/bootstrap.min.css';
import './homePage.style.css'
import '@globalStyles/ColorsVariables.css'
import ornamento from '/Ornament-11.png'
import ControlledCarousel from './Caurosel';
export const HomePageBanner = () => {
  return (
    <>
      <section className="homePageBanner"> 
        <div className="banner-container">
          <ControlledCarousel/>
        </div>
      </section>
     
    </>
  )
}