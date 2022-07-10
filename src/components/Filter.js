import React, { Component } from "react";

class Filter extends Component {
  state = {
    letters: "",
  };

  handleSerch = (e) => {
    this.setState({
      letters: e.target.value,
    });
  };

  //   const {letters} =this.state
  //   const startSerch = this.props.serch(letters)
  render() {
    return (
      <>
        <input
          value={this.state.letters}
          onChange={this.handleSerch}
          type="text"
          placeholder="Wpisz szukaną frazę"
        ></input>
      </>
    );
  }
}

export default Filter;
