import { HomePageBanner } from '../components/Section/HomePageBanner';
import ProductCard from '../components/ProductCard/ProductCard';
const Home = () => {
    const props = {
        name: 'Home',
        image_url: 'https://cdn.awsli.com.br/600x450/1621/1621592/produto/178661445/fbaf991a78bc4896a3e9ad7800abcec6_9366-sugbwn-g7y1qcudzg.png'
    }
    return (
        <>
            <HomePageBanner/>
            <ProductCard image_url={props.image_url} name={props.name} />
        </>
    )
}

export default Home;