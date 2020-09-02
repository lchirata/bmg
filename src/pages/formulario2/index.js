import React, { Component } from 'react';

import Header from '../../components/Header/index';
import { Container, Formulario } from './styles';

import TextField from '@material-ui/core/TextField';

import oneIcon from '../../images/oneIcon.png'
import twoIcon from '../../images/twoIcon.png'
import threeIcon from '../../images/threeIcon.png'


export default class Main extends Component {

     constructor(props) {
          super(props);
          this.state = {
               isGoing: true,
               numberOfGuests: 2
          };

          this.handleInputChange = this.handleInputChange.bind(this);
     }

     handleInputChange(event) {
          const target = event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const negocio = target.name;
          const cnpj = target.name;

          this.setState({
               [negocio]: value,
               [cnpj]: value,
          });


          this.onSubmit = (event) => {
               event.preventDefault();
               alert(this.state.cnpj);

          }
     };




     render() {

          return (
               <>
                    <Header />
                    <Container>

                         <div className="titulo1">
                              <span ><img src={oneIcon} alt="" /> Dados pessoais</span>
                         </div>
                         <div className="titulo2">
                              <span ><img src={twoIcon} alt="" /> Seu Negócio</span>
                         </div>
                         <div className="titulo3">
                              <span ><img src={threeIcon} alt="" /> Sua Simulação</span>
                         </div>
                    </Container>
                    <Formulario>
                         <h3>Ultimo passo para simular o seu crédito!</h3>
                         <br>
                         </br>


                         <form>
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="Nome do seu Negócio"
                                   defaultValue=""
                                   variant="filled"
                                   size="small"
                                   margin="10px"
                                   position="absolut"

                                   name="negocio"
                                   type="text"
                                   value={this.state.negocio}
                                   onChange={this.handleInputChange}

                              />
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="CNPJ"
                                   defaultValue=""
                                   variant="filled"
                                   size="small"
                                   margin="10px"
                                   position="absolut"

                                   name="cnpj"
                                   type="text"
                                   value={this.state.cnjp}
                                   onChange={this.handleInputChange}
                              />
                              <p>* O CNPJ Não é obrigatóio</p>
                              <p></p>
                              <button className="confirm" type="submit" onClick={this.onSubmit}value="Confirmar" > Confirmar </button>

                         </form>
                         <p></p>

                         <a href="/formulario1">Voltar </a>
                         <br />
                         <a href="/formulario2">Resultado </a>


                    </Formulario>


               </>

          )
     }
}