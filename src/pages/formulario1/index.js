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
          const name = target.name;
          const cpf = target.name;
          const email = target.name;
          const telefone = target.name;

          this.setState({
               [name]: value,
               [cpf]: value,
               [email]: value,
               [telefone]: value,
          });


          this.onSubmit = (event) => {
               event.preventDefault();
               alert(this.state.email);
               window.location.href = "/formulario2";
               

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
                         <h3>Olá! Quero muito te ajudar a construir seu sonho.</h3>
                         <p>Vamos começar com algumas perguntas. <br /> Preciso que você pense no seu negócio e detalhe o máximo as respostas.
                              <br />Lembra-se que estamos construindo o projeto dos seus sonhos!
                         </p>


                         <form method="post" action="" id="primeiro_form" >
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="Nome"
                                   defaultValue=""
                                   variant="filled"
                                   size="small"
                                   margin="10px"
                                   position="absolut"

                                   name="name"
                                   type="text"
                                   value={this.state.nome}
                                   onChange={this.handleInputChange}

                              />
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="CPF"
                                   defaultValue=""
                                   variant="filled"
                                   size="small"
                                   margin="10px"
                                   position="absolut"

                                   name="cpf"
                                   type="text"
                                   value={this.state.cpf}
                                   onChange={this.handleInputChange}

                              />
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="Email"
                                   defaultValue=""
                                   variant="filled"
                                   size="small"
                                   margin="10px"
                                   position="absolut"

                                   name="email"
                                   type="text"
                                   value={this.state.email}
                                   onChange={this.handleInputChange}

                              />
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="Telefone"
                                   defaultValue=""
                                   variant="filled"
                                   size="small"
                                   margin="10px"
                                   position="absolut"

                                   name="telefone"
                                   type="text"
                                   value={this.state.telefone}
                                   onChange={this.handleInputChange}

                              />

                              <p></p>

                              <button className="confirm" type="submit" onClick={this.onSubmit} value="Confirmar"  > 
                              Confirmar 
                              </button>
                         </form>
                         <p></p>

                         <a href="/formulario2">Continuar </a>


                    </Formulario>


               </>

          )
     }
}