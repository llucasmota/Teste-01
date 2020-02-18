import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      show: false
    };
  }

  Login = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  handleChange1 = e => {
    this.setState({ input1: e.target.value });
  };

  render() {
    const { input1, show } = this.state;
    const nome = input1.split("@");
    return (
      <div className="App">
        {show ? (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Bem vindo {nome[0]}</h1>
          </header>
        ) : (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <input
              className="App-input"
              name="email"
              onChange={this.handleChange1}
            />
            <input
              className="App-input"
              type={"password"}
              onChange={e => this.setState({ input2: e.value })}
            />
            <button className="App-link" onClick={this.Login}>
              Logar
            </button>
          </header>
        )}
      </div>
    );
  }
}

export default App;
