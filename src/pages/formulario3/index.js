import React, { Component } from 'react';

import Header from '../../components/Header/index';
import { Container, Simulacao } from './styles';

import oneIcon from '../../images/oneIcon.png'
import twoIcon from '../../images/twoIcon.png'
import threeIcon from '../../images/threeIcon.png'


export default class Main extends Component {



     constructor(props) {
          super(props)
          this.state = {
               valores: []
          }
     }

     getLocalStorage() {

          const investimento = (localStorage.getItem("@bmg/total"));
          const simulacao = parseInt(investimento * 0.10) + parseInt(investimento);

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

                    <Simulacao>

                         <div>
                              <header> Sua Simulação</header>

                              <p>Que máximo! Acho que posso te ajudar! </p> <br />
                              <h2>{`Para começar seu projeto AGORA vamos disponibilizar para você R$: ${
                              parseInt((localStorage.getItem("@bmg/total"))* 0.10) + parseInt((localStorage.getItem("@bmg/total")))
                              }`} </h2>
                              <br />

                              <h2>Com esse dinheiro você poderá comprar todos os itens da sua lista:</h2>

                              <h2>{` ${
                                   (localStorage.getItem("@bmg/item1")) }`} </h2>
                               <h2>{` ${
                                   (localStorage.getItem("@bmg/item2"))  }`} </h2>
                                <h2>{` ${
                                   (localStorage.getItem("@bmg/item3"))  }`} </h2>
                                 <h2>{` ${
                                   (localStorage.getItem("@bmg/item4"))  }`} </h2>
                                 <h2>{` ${
                                   (localStorage.getItem("@bmg/item5"))  }`} </h2>

                              

                    </div>







                    </Simulacao>

                    <button className="confirm" type="submit" onClick={this.getLocalStorage()} value="Confirmar" > Confirmar </button>

               </>

          )
     }
}