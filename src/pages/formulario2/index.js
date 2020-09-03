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
               alert(this.state.semana)
               event.preventDefault();
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
                         <h4>01) O que você precisa para começar seu projeto?</h4>
                         <h4>Para uma melhor simulação pesquise os valores de cada item na internet!</h4>
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

                                        name="name"
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

                                        name="name"
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

                                        name="name"
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

                                        name="name"
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

                                        name="name"
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

                              <h2>{`O Total de gastos necessários é: ${

                                   parseInt(this.state.valor1) +
                                   parseInt(this.state.valor2) +
                                   parseInt(this.state.valor3) +
                                   parseInt(this.state.valor4) +
                                   parseInt(this.state.valor5)

                                   }`} </h2>

                              <h3>Estamos quase lá! </h3>



                              <p>02) Quanto em média cada cliente paga cada vez que compra seu produto ou serviço? <br />
                                   (Ticket médio: Valor médio que cada cliente gasta com seu produto)
                              </p>

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

                              <p>03) Quantos clientes você consegue atender por dia? </p>

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


                              <p>04) Quantos dias na semana você pretende trabalhar no projeto?</p>

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

                              <h2>{`Seu Lucro no mês é de: ${

                                   parseInt(this.state.ticket)*
                                   parseInt(this.state.cliente)*
                                   parseInt(this.state.semana) 

                                   }`} </h2>


                              <br />
                              <button className="confirm" type="submit" onClick={this.onSubmit} value="Confirmar" > Confirmar </button>

                         </form>
                         <br />

                    </Formulario>


               </>

          )
     }
}