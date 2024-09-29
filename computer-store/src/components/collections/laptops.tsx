import LaptopsClient from './ServerConponent/laptopsClient';

export default async function LaptopsServer() {
    const fetchProducts = async () => {
        const res = await fetch("http://localhost:3000/api/product", { cache: "no-store" });
        return res.json();
    };
    
    const products = await fetchProducts();

    return <LaptopsClient products={products}/>
}