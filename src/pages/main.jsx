import React from "react";
import "./style/main.css";
import { Slide, Fade} from "react-awesome-reveal";

export default function Main() {
    return (
        <main className="w-screen h-screen bg-center bg-cover text-white flex justify-center items-center">
            <Fade duration={2000}>
                <h1 className="text-5xl font-bold">Bienvenido</h1>
            </Fade>
        </main>
    )
}