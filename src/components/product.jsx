import React from "react";

export default function Product({name, price, type}) {
    return (
        <article className="text-black shadow-xl p-4">
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{type}</p>
        </article>
    )
}