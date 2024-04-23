import { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js"
import Lounges from "./pages/lounges.js"
import Mixer from "./pages/mixer.js"
import Header from "./layout/header.js"
import Footer from "./layout/footer.js"

const App = () => {
  return (
    <div className='wrapper'>
      <Header />


     

      <Footer />
    </div>
  );

}

export default App;