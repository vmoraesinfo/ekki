import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Cadastro from './Cadastro';


import './App.css';

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    response: ''
  };

  componentDidMount() {
    fetch('/usuario/id/1')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            response: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const { error, isLoaded, response } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       
        <div>
          <header className="App-header">
            <h1 className="App-title">Bem Vindo {response.nome}</h1>
            <h3 className="App-title">Seu CPF é : {response.cpf}</h3>
            <h3 className="App-title">Seu Telefone é: {response.telefone}</h3>
            <h3 className="App-title">Seu saldo é: R$ {response.conta.saldo}</h3>
              <ButtonToolbar>
              <Link to="/cadastro/" className="btn"> Cadastrar Favorecido</Link>


              </ButtonToolbar>

          </header>
        </div>
      );
    }
  }
}

export default App;