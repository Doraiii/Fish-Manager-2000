import React, { Component } from "react";
import AddNew from "./AddNew";
import Table from "./Table";
import HeadBar from "./HeadBar";

const API = "data/lake.json";

class App extends Component {
  idCounter = 4;

  state = {
    lake: [],
  };

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((resoult) => {
        this.setState({
          lake: resoult,
        });
      });
  }

  delateFish = (id) => {
    const pond = [...this.state.lake];
    const index = pond.findIndex((fish) => fish.id === id);
    pond.splice(index, 1);
    this.setState({
      lake: pond,
    });
  };

  editFish = (id) => {
    console.log("edit którego trzea zbudować jako formularz " + id);
  };

  addFish = (name, amount, description) => {
    const newFish = {
      id: this.idCounter,
      name: name,
      amount: amount,
      description: description,
    };
    this.idCounter++;
    this.setState((prevState) => ({
      lake: [...prevState.lake, newFish],
    }));
    return true;
  };

  sortById = () => {
    const net = [...this.state.lake];
    net.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({
      lake: net,
    });
  };

  sortByAmount = () => {
    const net = [...this.state.lake];
    net.sort((a, b) => {
      return a.amount - b.amount;
    });
    this.setState({
      lake: net,
    });
  };

  sortByLetter = () => {
    const net = [...this.state.lake];
    net.sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    this.setState({
      lake: net,
    });
  };
  serch = (letters) => {
    console.log(letters);
  };

  render() {
    return (
      <>
        <HeadBar
          lake={this.state.lake}
          sortById={this.sortById}
          sortByAmount={this.sortByAmount}
          sortByLetter={this.sortByLetter}
          serch={this.serch}
        />
        <Table
          lake={this.state.lake}
          delate={this.delateFish}
          edit={this.editFish}
        />
        <AddNew lake={this.state.lake} addFish={this.addFish} />
      </>
    );
  }
}

export default App;
