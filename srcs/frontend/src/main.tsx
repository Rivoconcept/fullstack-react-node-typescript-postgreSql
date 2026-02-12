// src/main.tsx
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import './styles/main.scss';
import { CardContextProvider } from "./context/cardGame/CardContext";
// import { FruitProvider } from "./context/FruitContext";
import { CardGameContextProvider } from "./context/cardGame/CardGameContext";
// import Fruit from "./Fruit";
import CardScene from "./cardScenes/CardScene";
// import CoursWs from "./CoursWs";
// import Test from "./Test";
// import DoubleCompteur from "./DoubleCompteur";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <FruitProvider> */}
      <CardContextProvider>
        <CardGameContextProvider>
          <CardScene />
        </CardGameContextProvider>
      </CardContextProvider>
      {/* <Fruit /> */}
      
    {/* </FruitProvider> */}
    {/* <CoursWs/>
    <Test />
    <Suspense fallback={<p>Chargement utilisateur…</p>}>
      <DoubleCompteur />
    </Suspense> */}

  </React.StrictMode>
);
