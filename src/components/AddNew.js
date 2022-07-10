import React, { Component } from "react";

class AddNew extends Component {
  state = {
    name: "",
    amount: "0",
    description: "",
  };

  handleClick = () => {
    const { name, amount, description } = this.state;

    if (name.length > 2 && amount > 0 && description.length > 10) {
      const add = this.props.addFish(name, amount, description);
      if (add) {
        this.setState({
          name: "",
          amount: 0,
          description: "",
        });
      }
    } else {
      alert("nieprawidłowa nazwa, ilość ryby lub za krótki opis");
    }
  };

  handleNewName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleNewAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleNewDescription = (e) => {
      this.setState({
      description: e.target.value,
    });
  };

  render() {
    const addNewStyle = {
      border: "3px solid Navy",
      display: "flex",
      flexDirection: "column",
    };
    return (
      <div style={addNewStyle}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleNewName}
        ></input>
        <input
          type="number"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.handleNewAmount}
        ></input>
        <textarea
          rows="3"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleNewDescription}
        ></textarea>
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddNew;
