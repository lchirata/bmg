import React, { Component } from 'react';

import Header from '../../components/Header/index';
import { Container, Form } from './styles';

import TextField from '@material-ui/core/TextField';

import oneIcon from '../../images/oneIcon.png'
import twoIcon from '../../images/twoIcon.png'
import threeIcon from '../../images/threeIcon.png'


export default class Main extends Component {

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
                    <Form>
                         <h3>Olá! Quero muito te ajudar a construir seu sonho.</h3>
                         <p>Vamos começar com algumas perguntas. <br/> Preciso que você pense no seu negócio e detalhe o máximo as respostas. 
                              <br/>Lembra-se que estamos construindo o projeto dos seus sonhos! 
                         </p>


                         <form>
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="Nome"
                                   defaultValue=""
                                   variant="filled"
                                   size="small"
                                   margin="10px"
                                   position="absolut"

                              />
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="CPF"
                                   defaultValue=""
                                   variant="filled"
                                   size="small"
                                   position="absolut"

                              />
                             
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="E-mail"
                                   defaultValue=""
                                   variant="filled"
                                   size="small"
                                   position="absolut"
                              />
                              <TextField
                                   className="name"
                                   id="standard-size-small"
                                   label="Telefone"
                                   defaultValue=""
                                   variant="filled"
                                   size="small"
                                   
                              />

                              
                         </form>
                        <p></p>
                         <input className="confirm" type="submit" value="Confirmar" />
                         
                         </Form>
                         

               </>

          )
     }
}