import React, { Component } from "react";

import Container from "../components/Layout";

class Example extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    return (
      <Container>
        <p>{this.state.email}</p>
        <input
          className="bg-neutral-200 p-3 rounded-2xl border border-neutral-300"
          placeholder="Email"
          type="email"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <input
          className="bg-neutral-200 p-3 rounded-2xl border border-neutral-300"
          placeholder="Password"
          type="password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
      </Container>
    );
  }
}

export default Example;
