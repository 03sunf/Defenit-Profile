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

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Members members={this.state.members}></Members>
      </div>
    );
  }
}

export default App;
