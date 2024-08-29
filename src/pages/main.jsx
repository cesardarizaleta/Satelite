import React, { useEffect, useState } from "react";
import "./style/main.css";
import {Fade} from "react-awesome-reveal";
import Error from "../components/error";
import appFirebase from '../credenciales'
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

export default function Main() {

    const action = async () => {
        if(document.getElementById('login-name').value == '' || document.getElementById('login-pass').value == '') {
            const error = document.querySelector("#error-msg")
            error.style.top = '0'
            setTimeout(() => {
                error.style.top = '-50%'
            },1500)
            return
        }
        
        const email = document.getElementById('login-name').value
        const pass = document.getElementById('login-pass').value

        try {
            await signInWithEmailAndPassword(auth, email, pass)
        }
        catch(error) {
            const autherror = document.querySelector("#error-msg")
            autherror.style.top = '0'
            setTimeout(() => {
                autherror.style.top = '-50%'
            },1500)
            return
        }
        
        document.querySelector('main').style.transform = 'translateY(-100%)'
        document.getElementById('content').classList.add('enter')
        setTimeout(() => {
            document.querySelector('main').style.display = 'none'
        },1000)




        
    }


    return (
        <main className="w-screen transition-all duration-1000 h-screen bg-center bg-cover text-white flex justify-center items-center flex-col">
            <Error message="Datos Incorrectos" />

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
                <button onClick={action} id="login-btn" className="w-full my-2 bg-white text-black p-2 rounded-md
                transition-all active:scale-95 duration-500">Acceder</button>
            </article>
        </main>
    )
}