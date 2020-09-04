import React, { Component } from 'react';

import Header from '../../components/Header/index';
import { Container, Formulario } from './styles';

import TextField from '@material-ui/core/TextField';
import { FiCheck } from "react-icons/fi";


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
          const valor1 = target.name;
          const valor2 = target.name;
          const valor3 = target.name;
          const valor4 = target.name;
          const valor5 = target.name;
          const ticket = target.name;
          const cliente = target.name;
          const semana = target.name;

          this.setState({

               [item]: value,
               [valor1]: value,
               [valor2]: value,
               [valor3]: value,
               [valor4]: value,
               [valor5]: value,
               [ticket]: value,
               [cliente]: value,
               [semana]: value
          });

          this.onSubmit = (event) => {
               event.preventDefault();
               const valorp = this.state.valor1;
               const valors = this.state.valor2;
               const valort = this.state.valor3;
               const valorq = this.state.valor4;
               const valorv = this.state.valor5;

               const ticket = this.state.ticket;
               const cliente = this.state.cliente;
               const semana = this.state.semana;

               const item1 = this.state.item1;
               const item2 = this.state.item2;
               const item3 = this.state.item3;
               const item4 = this.state.item4;
               const item5 = this.state.item5;

               localStorage.setItem('@bmg/item1', item1);
               localStorage.setItem('@bmg/item2', item2);
               localStorage.setItem('@bmg/item3', item3);
               localStorage.setItem('@bmg/item4', item4);
               localStorage.setItem('@bmg/item5', item5);

               localStorage.setItem('@bmg/valor1', valorp);
               localStorage.setItem('@bmg/valor2', valors);
               localStorage.setItem('@bmg/valor3', valort);
               localStorage.setItem('@bmg/valor4', valorq);
               localStorage.setItem('@bmg/valor5', valorv);

               localStorage.setItem('@bmg/ticket', ticket);
               localStorage.setItem('@bmg/cliente', cliente);
               localStorage.setItem('@bmg/semana', semana);

               const total =
                    (parseFloat(this.state.valor1)) +
                    (parseFloat(this.state.valor2)) +
                    (parseFloat(this.state.valor3)) +
                    (parseFloat(this.state.valor4)) +
                    (parseFloat(this.state.valor5));

               const lucro =
                    parseFloat(this.state.ticket) *
                    parseFloat(this.state.cliente) *
                    parseFloat(this.state.semana)
                    ;

               if (isNaN(total)) {
                    alert("Preencha pelo menos 5 items")
                    window.location.href = "/formulario2";
               }

               else{
                    localStorage.setItem('@bmg/total', total);
                    localStorage.setItem('@bmg/lucro', lucro)


                    window.location.href = "/formulario3";
               }


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
                         <h4 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck /> O que você precisa para começar seu projeto?</h4>
                         <p style={{ color: 'red', margin: '15px' }} > Liste pelo menos 5 Items</p>
                         <h5>Para uma melhor simulação pesquise os valores de cada item na internet!</h5>
                         <br>
                         </br>

                         <div className="exemplo">

                              <p>Exemplo</p>

                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="item"
                                   defaultValue="Cadeiras de salão"
                                   variant="filled"
                                   size="small"
                                   margin="10px"
                                   position="absolut"
                              ></TextField>
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="Valor"
                                   defaultValue="300,00"
                                   variant="filled"
                                   size="small"
                                   margin="10px"
                                   position="absolut"
                              ></TextField>
                         </div>
                         <br></br>



                         <form>

                              <div>
                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="item 1 "
                                        defaultValue=""
                                        variant="outlined"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="item1"
                                        type="text"
                                        value={this.state.item}
                                        onChange={this.handleInputChange}
                                   />

                                   <TextField
                                        className="name"
                                        id="1"
                                        label="Valor"
                                        defaultValue="0,00"
                                        variant="outlined"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="valor1"
                                        type="integer"
                                        value={this.state.valor1}
                                        onChange={this.handleInputChange}
                                   />
                              </div>

                              <div>
                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="item 2"
                                        defaultValue=""
                                        variant="outlined"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="item2"
                                        type="text"
                                        value={this.state.item}
                                        onChange={this.handleInputChange}
                                   />

                                   <TextField
                                        className="name"
                                        id="2"
                                        label="Valor"
                                        defaultValue="0,00"
                                        variant="outlined"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="valor2"
                                        type="integer"
                                        value={this.state.valor2}
                                        onChange={this.handleInputChange}
                                   />
                              </div>

                              <div>
                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="item 3"
                                        defaultValue=""
                                        variant="outlined"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="item3"
                                        type="integer"
                                        value={this.state.item}
                                        onChange={this.handleInputChange}
                                   />

                                   <TextField
                                        className="name"
                                        id="3"
                                        label="Valor"
                                        defaultValue="0,00"
                                        variant="outlined"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="valor3"
                                        type="integer"
                                        value={this.state.valor3}
                                        onChange={this.handleInputChange}
                                   />
                              </div>

                              <div>
                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="item 4"
                                        defaultValue=""
                                        variant="outlined"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="item4"
                                        type="text"
                                        value={this.state.item}
                                        onChange={this.handleInputChange}
                                   />

                                   <TextField
                                        className="name"
                                        id="4"
                                        label="Valor"
                                        defaultValue="0,00"
                                        variant="outlined"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="valor4"
                                        type="integer"
                                        value={this.state.valor4}
                                        onChange={this.handleInputChange}
                                   />
                              </div>

                              <div>
                                   <TextField
                                        className="name"
                                        id="standard-size-small"
                                        label="item 5"
                                        defaultValue=""
                                        variant="outlined"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="item5"
                                        type="text"
                                        value={this.state.item}
                                        onChange={this.handleInputChange}
                                   />

                                   <TextField
                                        className="name"
                                        id="5"
                                        label="Valor"
                                        defaultValue="0,00"
                                        variant="outlined"
                                        size="small"
                                        margin="10px"
                                        position="absolut"

                                        name="valor5"
                                        type="integer"
                                        value={this.state.valor5}
                                        onChange={this.handleInputChange}
                                   />
                              </div>

                              <br />
                              <h3>Estamos quase lá! </h3>

                              <h4 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck />Quanto em média cada cliente paga <br />cada vez que compra seu produto ou serviço?</h4>
                              <h5>(Ticket médio: Valor médio que cada cliente gasta com seu produto)</h5>
                              <br />

                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="ticket médio"
                                   defaultValue=""
                                   variant="outlined"
                                   size="small"
                                   margin="10px"
                                   position="absolut"

                                   name="ticket"
                                   type="text"
                                   value={this.state.ticket}
                                   onChange={this.handleInputChange}
                              />

                              <h4 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck />Quantos clientes você consegue atender por dia?</h4>

                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="cliente/dia"
                                   defaultValue=""
                                   variant="outlined"
                                   size="small"
                                   margin="10px"
                                   position="absolut"

                                   name="cliente"
                                   type="text"
                                   value={this.state.cliente}
                                   onChange={this.handleInputChange}
                              />

                              <h4 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck />Quantos dias na semana você pretende trabalhar no projeto?</h4>


                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="dia/semana"
                                   defaultValue=""
                                   variant="outlined"
                                   size="small"
                                   margin="10px"
                                   position="absolut"

                                   name="semana"
                                   type="text"
                                   value={this.state.semana}
                                   onChange={this.handleInputChange}
                              />


                              <br />

                              <button className="confirm" type="submit" onClick={this.onSubmit} value="Confirmar"  >
                                   Confirmar
                              </button>

                         </form>
                         <br />

                    </Formulario>


               </>

          )
     }
}