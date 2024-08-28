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

            <article className="w-80 relative h-fit my-5 rounded-xl flex flex-col gap-4 justify-between items-center p-7">
                <section className="flex flex-col w-full">
                    <label for="login-name">Usuario</label>
                    <input id="login-name" className="p-2 transition-all text-black rounded-md outline-none" placeholder="Jose"></input>
                </section>
                <section className="flex flex-col w-full">
                    <label for="login-pass">Contraseña</label>
                    <input id="login-pass" className="p-2 transition-all text-black rounded-md outline-none" type="password" placeholder="1..."></input>
                </section>
                <button className="w-full my-2 bg-white text-black p-2 rounded-md
                transition-all active:scale-95 duration-500">Acceder</button>
            </article>
        </main>
    )
}