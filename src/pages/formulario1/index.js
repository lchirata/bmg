import React, { Component } from 'react';

import Header from '../../components/Header/index';
import { Container, Formulario } from './styles';

import api from '../../services/api';
import TextField from '@material-ui/core/TextField';

import oneIcon from '../../images/oneIcon.png';
import twoIcon from '../../images/twoIcon.png';
import threeIcon from '../../images/threeIcon.png';


export default class Main extends Component {

    

     constructor(props) {
          super(props);
          this.state = {
               clientList:[],
          };

          this.handleInputChange = this.handleInputChange.bind(this);
     }

     handleInputChange(event) {
          const target = event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const nome = target.name;
          const cpf = target.name;
          const email = target.name;
          const telefone = target.name;
          const negocio = target.name;
          const cnpj = target.name;



          this.setState({
               [nome]: value,
               [cpf]: value,
               [email]: value,
               [telefone]: value,
               [negocio]: value,
               [cnpj]: value,
          });

         





          this.onSubmit = (event) => {

               const response = api.post('/clientes', 
               {
                    nome: this.state.nome, 
                    cpf: this.state.cpf, 
                    email: this.state.email,
                    telefone: this.state.telefone,
                    empresa: this.state.negocio,
                    cnpj: this.state.cnpj
               });
     
               this.setState({clientList: response.data})

               event.preventDefault();
               // alert(this.state.nome);
               window.location.href = "/formulario2";
          }
     };




     render() {

          return (
               <>
                    <Header />
                    <Container>

                         <div className="titulo1">
                              <span ><img src={oneIcon} alt="" /> Seus Dados</span>
                         </div>
                         <div className="titulo2">
                              <span ><img src={twoIcon} alt="" /> Seus Gastos</span>
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

                                   name="nome"
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

                              <br></br>
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
                              <p className="cnpj">* O CNPJ Não é obrigatóio</p>

                              <p></p>

                              <button className="confirm" type="submit" onClick={this.onSubmit} value="Confirmar"  > 
                              Confirmar 
                              </button>
                         </form>


                         <p></p>

                    </Formulario>


               </>

          )
     }
}