import React, { useEffect, useState } from "react";
import './style/content.css';
import Product from "../components/product";

export default function Content() {

    function type(e) {
        if(e.target.classList.contains('bg-white')) {
            e.target.classList.add('bg-black', 'text-white');
            e.target.classList.remove('bg-white', 'text-black','border');
        }
        else {
            e.target.classList.remove('bg-black', 'text-white');
            e.target.classList.add('bg-white', 'text-black','border');
        }
        console.log(productos)
    }

    const [productos, setProductos] = useState([]
    );

    useEffect(() => {

        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10", requestOptions)
            .then((response) => response.json())
            .then((result) => setProductos(result))
            .catch((error) => console.error(error));

    },[])


    return  (
        <div id="content" className="h-screen w-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Lista Licores </h1>
            <nav className="w-4/5 overflow-auto justify-center flex">
                <ul className="flex items-center gap-4">
                    <li onClick={type} className="bg-black transition-all cursor-pointer text-white p-2 px-8 rounded-full">Todos</li>
                    <li onClick={type} className="bg-black transition-all cursor-pointer text-white p-2 px-8 rounded-full">Ron</li>
                    <li onClick={type} className="bg-black transition-all cursor-pointer text-white p-2 px-8 rounded-full">Vodka</li>
                    <li onClick={type} className="bg-black transition-all cursor-pointer text-white p-2 px-8 rounded-full">Whisky</li>
                    <li onClick={type} className="bg-black transition-all cursor-pointer text-white p-2 px-8 rounded-full">Tequila</li>
                    <li onClick={type} className="bg-black transition-all cursor-pointer text-white p-2 px-8 rounded-full">Cerveza</li>
                    <li onClick={type} className="bg-black transition-all cursor-pointer text-white p-2 px-8 rounded-full">Vino</li>
                </ul>
            </nav>
            <section className="w-4/5 gap-4 grid">
                {productos.map((producto) => (
                    <Product name={producto.title} price={producto.price} type={producto.id} />
                ))}
            </section>
        </div>
    )
}