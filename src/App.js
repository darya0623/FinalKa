import { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js"
import Lounges from "./pages/lounges.js"
import Mixer from "./pages/mixer.js"
import LoungeInfo from "./pages/loungeInfo.js"

import Footer from "./layout/footer.js"


const App = () => {

  return (
    <div className='wrapper'>
      <header>

        <div className='navbar'>
          <img className='logo' src={logo} alt="error" />
          <Link to={""}>Табаки</Link>
          <Link to={""}>Миксы</Link>
          <Link to={""}>Лаунжи</Link>
          <Link to={""}>Магазины</Link>
          <Link to={""}>Карта</Link>
        </div>
      </header>

      <Footer />
    </div>
  );

}

export default App;