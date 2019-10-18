import React, {Component} from 'react';
import { Button} from 'react-bootstrap';



import './App.css';

class Cadastro extends Component {
  state = {
    error: null,
    response: ''
  };

  fetchAPI(value) {
    
    fetch('/usuario/nome/' + value)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
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
 };

 renderTableData() {
  return this.state.response.map((response, index) => {
    const { id, nome, cpf, conta } = response //destructuring
    return (
       <tr key={id}>
          <td>{nome}</td>
          <td>{cpf}</td>
          <td>{conta.saldo}</td>
       </tr>
    )
 })
  console.log(this.state.response);
  
};


  render() {
    return (
      <div className="App">
        <header className="App-header">
          Nome Do Favorecido: 
          <input type="text" name="name" id="nome"/>
          <Button variant="primary" onClick={this.fetchAPI(document.getElementById('nome').innerHTML)}>Buscar</Button>
          <table id='usuarios'>
              <tbody>
                {this.renderTableData()}
              </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default Cadastro;