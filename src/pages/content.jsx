import React from "react";
import './style/content.css';

export default function Content() {
    return  (
        <div id="content" className="h-screen w-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Lista Licores</h1>
            <nav className="w-4/5 overflow-auto justify-center flex">
                <ul className="flex items-center gap-4">
                    <li className="bg-black text-white p-2 px-8 rounded-full">Todos</li>
                    <li className="bg-black text-white p-2 px-8 rounded-full">Ron</li>
                    <li className="bg-black text-white p-2 px-8 rounded-full">Vodka</li>
                    <li className="bg-black text-white p-2 px-8 rounded-full">Whisky</li>
                    <li className="bg-black text-white p-2 px-8 rounded-full">Tequila</li>
                    <li className="bg-black text-white p-2 px-8 rounded-full">Cerveza</li>
                    <li className="bg-black text-white p-2 px-8 rounded-full">Vino</li>
                </ul>
            </nav>
            <section>

            </section>
        </div>
    )
}