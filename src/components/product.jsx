import React from "react";
import './product.css';

export default function Product({name, price, type, image}) {

    return (
        <article className="text-black h-56 overflow-hidden flex rounded-lg shadow-md
        transition-all duration-500">
            <img className="w-1/2 aspect-square transition-all duration-500" src={image} alt={name} />
            <div className="flex flex-col justify-center h-full w-full p-4">
                <h3><span>Nombre:</span> {name}</h3>
                <p><span>Precio:</span> {price} $</p>
                <p><span>Marca:</span> {type}</p>
            </div>
        </article>
    )
}