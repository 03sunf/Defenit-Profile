import React, { Component } from "react";
import Header from "./Components/Header";
import Members from "./Components/Members";
import Teams from "./Teams";

class App extends Component {
  constructor(props) {
    super(props);

    // Initializing, remove warn and error.
    console.log(
      "%cDefenit",
      "color: #8041D9; font-size: 77px; font-weight: 900;"
    );

    console.log(
      "%cWhat are you going to do with this?",
      "font-size: 15px; font-weight: 100;"
    );

    console = () => {};

    this.state = {
      members: Teams.all,
    };
  }

  select = (path) => {
    switch (path) {
      case "all":
        this.setState(() => {
          return { members: Teams.all };
        });
        break;

      case "pwn":
        this.setState(() => {
          return { members: Teams.pwn };
        });
        break;

      case "web":
        this.setState(() => {
          return { members: Teams.web };
        });
        break;

      case "reversing":
        this.setState(() => {
          return { members: Teams.reversing };
        });
        break;

      case "crypto":
        this.setState(() => {
          return { members: Teams.crypto };
        });
        break;

      default:
        this.setState(() => {
          return { members: Teams.all };
        });
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <Header select={this.select.bind(this)}></Header>
        <Members
          members={this.state.members}
          className="duration-500 "
        ></Members>
      </div>
    );
  }
}

export default App;
