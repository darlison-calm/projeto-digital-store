import Collection from '../components/Collection/Collection';
import { HomePageBanner } from '../components/Section/HomePageBanner';
import { ProductListing } from '../components/ProductListing/ProductListing';
import { SpecialOffer } from '../components/SpecialOffer/SpecialOffer';

const Home = () => {
    
    return (
        <>
            <HomePageBanner/>
            <Collection/>
            <ProductListing/>
            <SpecialOffer/>
        </>
    )
}

export default Home;