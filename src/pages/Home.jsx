import { HomePageBanner } from '../components/Section/HomePageBanner';
import {Product} from '../components/ProductCard/ProductCard'

const props = {
    nome: "K-Swiss V8 - Masculino",
    nota: 4,
    marca: "Adidas",
    modelo: "Casual",
    referencia: "38416711",
    preco_original: 300,
    preco_desconto: 250,
    imagem_url: "https://i.ibb.co/XZzRvBJ/Layer-1aa-2.png"
  };
  


const Home = () => {

    return (
        <>
            <HomePageBanner/>
            <Product 
                image_url={props.imagem_url} 
                nome={props.nome} 
             
                marca={props.marca} 

            
                preco_original={props.preco_original} 
                preco_desconto={props.preco_desconto} 
            />
        </>
    )
}

export default Home;