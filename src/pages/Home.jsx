import { HomePageBanner } from '../components/Section/HomePageBanner';
import {Product} from '../components/ProductCard/ProductCard'
import { ProductListing } from '../components/ProductListing/ProductListing';

const Home = () => {
    
    return (
        <>
            <HomePageBanner/>
            <ProductListing/>
        </>
    )
}

export default Home;