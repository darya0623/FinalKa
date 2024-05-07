import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../img/logo.svg'
import Kalyan from "./../img/Kalyan.png"
import Hello from "./../img/Hello.png"
import 
import HeaderStyle from "./../layout/Layout.scss"
// import Home from "./pages/home.js"
// import Lounges from "./pages/lounges.js"
// import Mixer from "./pages/mixer.js"
// import LoungeInfo from "./pages/loungeInfo.js"


export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="header-nav">
                    <a href="/home"><img className="nav-logo" src={logo} alt="error" /></a>
                    <a href="/tabaks" className="nav-item">Главная</a>
                    <a href="/mixes" className="nav-item">Миксы</a>
                    <a href="/lounges" className="nav-item">Лаунжи</a>
                    <a href="/home" className="nav-item">Магазины</a>
                    <a href="/home" className="nav-item">Карта</a>
                    <a href="/home" className="nav-item">Мои табаки</a>
                    <a href="/login" className="nav-item">Войти</a>
                </nav>

                <div className="header-hello">
                    <p className="hello-text">Приветствуем на</p>
                    <img src={Hello} alt="error" className="hello-name" />
                    <img src={} alt="" />
                </div>

            </div>
        </header>
    )
}