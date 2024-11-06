import Collection from '../components/Collection/Collection';
import { HomePageBanner } from '../components/Section/HomePageBanner';
import {Product} from '../components/ProductCard/ProductCard'
import { ProductListing } from '../components/ProductListing/ProductListing';

const Home = () => {
    
    return (
        <>
            <HomePageBanner/>
            <Collection/>
            <ProductListing/>
        </>
    )
}

export default Home;