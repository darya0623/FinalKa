import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Home from "./pages/home.js"
import Tabaks from "./pages/tabaks.js"
import TabakInfo from "./pages/tabakInfo.js"
import Lounges from "./pages/lounges.js"
import LoungeInfo from "./pages/loungeInfo.js"
import Mixes from "./pages/mixes.js"
import MixInfo from "./pages/mixInfo.js"
import Mixer from "./pages/mixer.js"
import LogIn from "./pages/login.js"
import SignUp from "./pages/signup.js"
import ".././src/index.scss"


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />
//       },
//       {
//         path: "/tabaks",
//         element: <Tabaks />
//       },
//       {
//         path: "/tabakinfo",
//         element: <TabakInfo />
//       },
//       {
//         path: "/lounges",
//         element: <Lounges />
//       },
//       {
//         path: "/loungeinfo",
//         element: <LoungeInfo />
//       },
//       {
//         path: "/mixes",
//         element: <Mixes />
//       },
//       {
//         path: "/mixinfo",
//         element: <MixInfo />
//       },
//       {
//         path: "/mixes",
//         element: <Mixer />
//       },
//       {
//         path: "/login",
//         element: <LogIn />
//       },
//       {
//         path: "/signup",
//         element: <SignUp />
//       }
//     ]
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);