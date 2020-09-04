import React, { Component } from 'react';

import Header from '../../components/Header/index';
import { Container, Simulacao } from './styles';
import { FiCheck } from "react-icons/fi";

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
                              <header>
                                   <h1> O valor que Você precisa </h1>
                              </header>

                              <h1>{` R$: ${
                                   parseFloat((localStorage.getItem("@bmg/total")) * 0.10) +
                                   parseFloat((localStorage.getItem("@bmg/total")))
                                   }`} </h1>

                              <br />

                              <h3>Com esse dinheiro você poderá comprar todos os itens da sua lista
                                   <br />
                                   e terá mais uma margem para emergências.
                              </h3>


                              <h2 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck /> {` ${
                                   (localStorage.getItem("@bmg/item1"))}`} </h2>
                              <h2 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck /> {` ${
                                   (localStorage.getItem("@bmg/item2"))}`} </h2>
                              <h2 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck />  {` ${
                                   (localStorage.getItem("@bmg/item3"))}`} </h2>
                              <h2 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck /> {` ${
                                   (localStorage.getItem("@bmg/item4"))}`} </h2>
                              <h2 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck /> {` ${
                                   (localStorage.getItem("@bmg/item5"))}`} </h2>
                         </div>

                    </Simulacao>


                    <Simulacao>

                         <div>
                              <header>
                                   <h1> Parcelas </h1>
                              </header>

                              <h1> Você pode escolher essas opções </h1>

                              <br />

                              <h2 style={{ color: '#50c2b1', margin: '1px' }} ><FiCheck /> 12X{` ${
                                   ((parseFloat((localStorage.getItem("@bmg/total")) * (1 + 0.5) ^ 12) / 12).toFixed(2))
                                   }`} </h2>
                              <h2 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck /> 24X{` ${
                                   ((parseFloat((localStorage.getItem("@bmg/total")) * (1 + 0.5) ^ 24) / 24).toFixed(2))
                                   }`} </h2>
                              <h2 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck /> 36X{` ${
                                   ((parseFloat((localStorage.getItem("@bmg/total")) * (1 + 0.5) ^ 36) / 36).toFixed(2))
                                   }`} </h2>
                         </div>

                    </Simulacao>

                    <Simulacao>

                         <div>
                              <header>
                                   <h1> Como pagar? </h1>
                              </header>

                              <h3>Se por exemplo escolher a opção de parcela de 1 ano,
                               <br />
                                 e terá mais uma margem para emergências.
                               </h3>


                              <h2 style={{ color: '#50c2b1', margin: '1px' }} ><FiCheck /> Você ganha mais ou menos  {` ${
                                   ((parseFloat((localStorage.getItem("@bmg/ticket")) * (parseFloat((localStorage.getItem("@bmg/cliente")))))))

                                   }`} reais por dia trabalhado </h2>
                              <h2 style={{ color: '#50c2b1', margin: '15px' }} ><FiCheck /> Sendo assim, é possivel quita a parcela com mais ou menos {` ${
                                   ((parseInt(((localStorage.getItem("@bmg/total") * (1 + 0.5) ^ 12) / 12).toFixed(1) / (((localStorage.getItem("@bmg/ticket") * ((localStorage.getItem("@bmg/cliente")))))))) + 1)
                                   }`} dias de trabalho!</h2>
                         </div>

                    </Simulacao>
                    <Simulacao>
                         <div>
                              <h2 style={{ color: '#442C74', margin: '1px' }} >O BMG é para você!</h2>
                              <br />
                              <button className="confirm" type="submit"   >
                                   Entre em contato dos nossos gerentes!
                         </button>
                         </div>
                    </Simulacao>


               </>

          )
     }
}