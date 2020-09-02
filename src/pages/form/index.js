import React, { Component } from 'react';

import Header from '../../components/Header/index';
import { Container } from './styles';

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

                         <Container> </Container>
                    
                    
                    <form className="formulario">
                         <div>
                              <h3>Olá! Quero muito te ajudar a construir seu sonho.</h3>

                              <p>Vamos começar com algumas perguntas. Preciso que você pense no seu negócio e detalhe o máximo as respostas. Lembra-se que estamos construindo o projeto dos seus sonhos! </p>
                         </div>


                         <TextField
                              className="name"
                              id="standard-size-small"
                              label="Nome"
                              defaultValue=""
                              variant="filled"
                              size="small"
                              margin="10px"

                         />
                         <TextField
                              className="name"
                              id="standard-size-small"
                              label="CPF"
                              defaultValue=""
                              variant="filled"
                              size="small"

                         />
                         <div></div>
                         <TextField
                              className="name"
                              id="standard-size-small"
                              label="E-mail"
                              defaultValue=""
                              variant="filled"
                              size="small"
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
                    <input type="submit" value="Confirmar" />

                    </Container>

               </>

          )
     }
}