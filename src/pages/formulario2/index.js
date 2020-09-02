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
               numberOfGuests: 2,

          };

          this.handleInputChange = this.handleInputChange.bind(this);
     }

     handleInputChange(event) {
          const target = event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const item = target.name;
          const valor = target.name;

          this.setState({

               [item]:value,
               [valor]:value
          });


          this.onSubmit = (event) => {
               event.preventDefault();
               alert(this.state.valor);   
          }

     };
     
     addItems() {

     }

     handleChange(e, index){
     }




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
                         <h4>O que você precisa para começar seu projeto?</h4>
                         <h4>Para uma melhor simulação pesquise os valores de cada item na internet!</h4>
                         <br>
                         </br>


                         <form>

                              <div>
                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="item 1 "
                                        defaultValue=""
                                        variant="filled"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="item"
                                        type="text"
                                        value={this.state.cnjp}
                                        onChange={this.handleInputChange}
                                   />

                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="Valor"
                                        defaultValue=""
                                        variant="filled"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="valor"
                                        type="text"
                                        value={this.state.cnjp}
                                        onChange={this.handleInputChange}
                                   />
                              </div>

                              <div>
                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="item 2"
                                        defaultValue=""
                                        variant="filled"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="item"
                                        type="text"
                                        value={this.state.cnjp}
                                        onChange={this.handleInputChange}
                                   />

                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="Valor"
                                        defaultValue=""
                                        variant="filled"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="valor"
                                        type="text"
                                        value={this.state.cnjp}
                                        onChange={this.handleInputChange}
                                   />
                              </div>

                              <div>
                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="item 3"
                                        defaultValue=""
                                        variant="filled"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="item"
                                        type="text"
                                        value={this.state.cnjp}
                                        onChange={this.handleInputChange}
                                   />

                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="Valor"
                                        defaultValue=""
                                        variant="filled"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="valor"
                                        type="text"
                                        value={this.state.cnjp}
                                        onChange={this.handleInputChange}
                                   />
                              </div>

                              <div>
                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="item 4"
                                        defaultValue=""
                                        variant="filled"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="item"
                                        type="text"
                                        value={this.state.cnjp}
                                        onChange={this.handleInputChange}
                                   />

                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="Valor"
                                        defaultValue=""
                                        variant="filled"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="valor"
                                        type="text"
                                        value={this.state.cnjp}
                                        onChange={this.handleInputChange}
                                   />
                              </div>

                              <div>
                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="item 5"
                                        defaultValue=""
                                        variant="filled"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="item"
                                        type="text"
                                        value={this.state.cnjp}
                                        onChange={this.handleInputChange}
                                   />

                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="Valor"
                                        defaultValue=""
                                        variant="filled"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="valor"
                                        type="text"
                                        value={this.state.cnjp}
                                        onChange={this.handleInputChange}
                                   />
                              </div>

                              <br />
                              <button className="confirm" type="submit" onClick={this.onSubmit} value="Confirmar" > Confirmar </button>

                         </form>
                         <br />

                         <a href="/formulario1">Voltar </a>
                         <br />
                         <a href="/formulario2">Resultado </a>


                    </Formulario>


               </>

          )
     }
}