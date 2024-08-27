import React from "react";
import "./style/main.css";
import { Slide, Fade} from "react-awesome-reveal";

export default function Main() {
    return (
        <main className="w-screen h-screen bg-center bg-cover text-white flex justify-center items-center flex-col">
            <Fade cascade duration={2000}>
                <h1 className="text-4xl font-bold text-wrap">Satelite Express</h1>
                <p>Bienvenidos</p>
            </Fade>

            <article className="w-80 my-5 rounded-lg flex flex-col justify-between items-center p-10">
                <h3 className="text-xl">Listado de Precios</h3>
                <section className="flex flex-col w-full">
                    <label>Usuario</label>
                    <input className="p-2 transition-all text-black rounded-md outline-none" placeholder="Jose"></input>
                </section>
                <section className="flex flex-col w-full">
                    <label>Contraseña</label>
                    <input className="p-2 transition-all text-black rounded-md outline-none" type="password" placeholder="1..."></input>
                </section>
                <button className="w-full bg-white text-black p-2 rounded-md">Acceder</button>
            </article>
        </main>
    )
}