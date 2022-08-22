import { useState } from "react";
import Card from "./component/Card";
import { mainContext } from "./context/mainContext";
import LayoutContextProvider from "./context/LayoutContext";
import LayoutContextNewProvider from "./context/LayoutContextNew";
import { mainContextFunction } from "./context/mainContextFunction";
import MainContextProviderClass from "./context/mainContext";

function App() {
  return (
    <div className="App">
      <LayoutContextNewProvider>
        <MainContextProviderClass>
          <Card />
        </MainContextProviderClass>
      </LayoutContextNewProvider>
    </div>
  );
}

export default App;
