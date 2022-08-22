import { useState } from "react";
import Card from "./component/Card";
import { mainContext } from "./context/mainContext";
import LayoutContextProvider from "./context/LayoutContext";

function App() {
  const [data, setData] = useState({
    name: "Rey",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  });

  const mainContextValue = {
    data,
  };

  return (
    <div className="App">
      <LayoutContextProvider>
        <mainContext.Provider value={mainContextValue}>
          <Card />
        </mainContext.Provider>
      </LayoutContextProvider>
    </div>
  );
}

export default App;
