import React, { useEffect, useState } from "react";
import './style/content.css';
import Product from "../components/product";
import LicoresJSON from "../resources/data/licores.json"

export default function Content() {

    function type(e) {
        let tipo = e.target.innerText;
        if (tipo === "Todos") {
            setProductos(LicoresJSON);
        } else {
            let newProductos = LicoresJSON.filter(producto => producto.nombre === tipo);
            setProductos(newProductos);
        }
    }

    const [productos, setProductos] = useState(LicoresJSON);


    return  (
        <div id="content" className="h-screen w-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Lista Licores </h1>
            <nav className="w-4/5 overflow-auto justify-center flex">
                <ul className="flex items-center overflow-auto gap-4">
                    <li onClick={type} className="bg-black transition-all active:scale-95 cursor-pointer text-white p-2 px-8 rounded-full">Todos</li>
                    <li onClick={type} className="bg-black transition-all active:scale-95 cursor-pointer text-white p-2 px-8 rounded-full">Ron</li>
                    <li onClick={type} className="bg-black transition-all active:scale-95 cursor-pointer text-white p-2 px-8 rounded-full">Vodka</li>
                    <li onClick={type} className="bg-black transition-all active:scale-95 cursor-pointer text-white p-2 px-8 rounded-full">Whiskey</li>
                    <li onClick={type} className="bg-black transition-all active:scale-95 cursor-pointer text-white p-2 px-8 rounded-full">Tequila</li>
                    <li onClick={type} className="bg-black transition-all active:scale-95 cursor-pointer text-white p-2 px-8 rounded-full">Ginebra</li>
                    <li onClick={type} className="bg-black transition-all active:scale-95 cursor-pointer text-white p-2 px-8 rounded-full">Brandy</li>
                </ul>
            </nav>
            <section className="w-4/5 gap-4 grid h-1/2 overflow-auto">
                {productos.map((producto) => (
                    <Product image={producto.imagen} name={producto.nombre} price={producto.precio} type={producto.marca} />
                ))}
            </section>
        </div>
    )
}