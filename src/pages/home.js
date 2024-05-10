import React from "react";
import logo from "./../img/logo.svg";
import Kalyan from "./../img/Kalyan.png";
import Hello from "./../img/Hello.png";
import FogOne from "./../img/FogOne.png";
import FogTwo from "./../img/FogTwo.png";
import Portal from "./../img/Portal.png"
import HomeStyle from "./../pages/Pages.scss";
// import Home from "./pages/home.js"
// import Lounges from "./pages/lounges.js"
// import Mixer from "./pages/mixer.js"
// import LoungeInfo from "./pages/loungeInfo.js"

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="kalyan-wrap">
          <div className="main-hello">
                <p className="hello-text">Приветствуем на</p>
                <img src={Hello} alt="error" className="hello-name" />
                <img src={Kalyan} alt="error" className="hello-kalyan" />
                <img src={Portal} alt="" className="hello-portal" />
                <div className="main-subtitle">
                    <div className="subtitle-item">
                        <p className="item-text">Здесь ты найдешь миксы на любой вкус</p>
                    </div>
                </div>
          </div>

          <img src={FogOne} alt="error" className="hello-fog1" />
          <img src={FogTwo} alt="error" className="hello-fog2" />

        </div>
      </div>
    </main>
  );
}
