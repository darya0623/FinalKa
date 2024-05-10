import { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js"
import Lounges from "./pages/lounges.js"
import Mixer from "./pages/mixer.js"
import LoungeInfo from "./pages/loungeInfo.js"
import ".././src/App.scss"
import logo from './../src/img/logo.svg'


const App = () => {

  return ( 
  <Fragment>
    <header className="header">
            <div className="container">
                <nav className="header-nav">
                    <a href="/home"><img className="nav-logo" src={logo} alt="error" /></a>
                    <a href="/tabaks" className="nav-item">Табаки</a>
                    <a href="/mixes" className="nav-item">Миксы</a>
                    <a href="/lounges" className="nav-item">Лаунжи</a>
                    <a href="/home" className="nav-item">Магазины</a>
                    <a href="/home" className="nav-item">Карта</a>
                    <a href="/home" className="nav-item">Мои табаки</a>
                    <a href="/login" className="nav-item">Войти</a>
                </nav>
            </div>
        </header>

        <main>
        </main>
    {/* <Routes>
          <Route path="/home" index element={<Home />} />

          <Route path="/lounges" element={<Lounges />} />

          <Route path="/lounge-info" element={<LoungeInfo />} />

          <Route path="/mixer" element={<Mixer />} />
        </Routes> */}

<footer className='footer'>
  <div className="container">
      <nav className="footer-nav">
        <a href="" className="nav-item">Табаки</a>
        <a href="" className="nav-item">Миксы</a>
        <a href="" className="nav-item">Лаунжи</a>
        <a href="" className="nav-item">Магазины</a>
        <a href="" className="nav-item">Карта</a>
      </nav>
  </div>
    </footer>
  </Fragment>

  );

}

export default App;