import React, { Component, createContext } from "react";

// contoh pakai class component dan data nya ada di dalam sini langsung
// beda sama yang mainContext itu datanya di luar

export const LayoutContext = createContext();

class LayoutContextProvider extends Component {
  state = {
    nightmode: true,
    day: {
      color: "#000",
      background: "red",
    },
    night: {
      color: "#ffff",
      background: "#000",
    },
  };

  handleToggle = () => {
    this.setState({
      nightmode: !this.state.nightmode,
    });
  };

  render() {
    return (
      <LayoutContext.Provider
        value={{ ...this.state, handleToggle: this.handleToggle }} //ini ada value disini karena datanya ada di dalam context
      >
        {this.props.children}
      </LayoutContext.Provider>
    );
  }
}

export default LayoutContextProvider;
