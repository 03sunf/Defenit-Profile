import React, { Component } from "react";
import Header from "./Components/Header";
import Members from "./Components/Members";
import Teams from "./Teams";

class App extends Component {
  constructor(props) {
    super(props);

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
