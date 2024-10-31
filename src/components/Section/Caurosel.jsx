import Carousel from 'react-bootstrap/Carousel';

const heroData = [
  {
    id: 1,
    paragrafo1: 'Melhores ofertas personalizadas',
    titulo: 'Queima de estoque Nike',
    paragrafo2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus libero excepturi delectus minima.',
    imgSrc: '/tenis-banner.png' 
  },
  {
    id: 2,
    paragrafo1: 'Novidades em tecnologia',
    titulo: 'Promoção de Gadgets',
    paragrafo2: 'Aproveite até 50% de desconto em uma seleção especial de gadgets e eletrônicos.',
    imgSrc: '/tenis-banner.png' 
  },
  {
    id: 3,
    paragrafo1: 'Estilos que fazem a diferença',
    titulo: 'Coleção Primavera/Verão',
    paragrafo2: 'Descubra as últimas tendências em moda com nossa nova coleção de primavera/verão.',
    imgSrc: '/tenis-banner.png' 
  },
  {
    id: 4,
    paragrafo1: 'Estilos que fazem a diferença',
    titulo: 'Coleção Primavera/Verão',
    paragrafo2: 'Descubra as últimas tendências em moda com nossa nova coleção de primavera/verão.',
    imgSrc: '/tenis-banner.png' 
  },

]

function ControlledCarousel() {
  return (
    <Carousel>
      {heroData.map(item => (
        <Carousel.Item key={item.id}>
          <div className="banner">
            <p className='fw-bold'>{item.paragrafo1}</p>
            <h1>{item.titulo}</h1>
            <p className='py-2'>{item.paragrafo2}</p>
            <button className='btn py-2'>Ver Ofertas</button>
          </div>
          <img src={item.imgSrc} className='tenis-banner' alt="tenis nike" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
