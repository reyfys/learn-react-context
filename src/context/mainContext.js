import { render } from "@testing-library/react";
import { createContext, useState, Component } from "react";

export const mainContextClass = createContext({
  empty: true,
});

class MainContextProviderClass extends Component {
  state = {
    name: "Rey",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  };

  render() {
    return (
      <mainContextClass.Provider value={{ ...this.state }}>
        {this.props.children}
      </mainContextClass.Provider>
    );
  }
}

export default MainContextProviderClass;

// challenge selanjutnya  :
// PINDAHKAN DATA di app.js ke sini
// *lakukan dengan cara class dan function
