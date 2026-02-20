// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import './styles/main.scss';
import { CardContextProvider } from "./card-game/context/CardContext";
import { CardGameContextProvider } from "./card-game/context/CardGameContext";
import CardScene from "./card-game/cardScenes/CardScene";

// import { FruitProvider } from "./context/FruitContext";

// import Fruit from "./Fruit";


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
  </React.StrictMode>
);
