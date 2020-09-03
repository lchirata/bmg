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
               soma: ''

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

          this.setState({

               [item]: value,
               [valor1]: value,
               [valor2]: value,
               [valor3]: value,
               [valor4]: value,
               [valor5]: value
          });


          this.onSubmit = (event) => {

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
                    <div>
                         <form className="ganhos_e_gastos">
                              <h3>Estamos quase lá!</h3>

                              <p>02) Quanto em média cada cliente paga cada vez que compra seu produto ou serviço? <br />
                                   (Ticket médio: Valor médio que cada cliente gasta com seu produto)
                              </p>

                              <p>03) Quantos clientes você consegue atender por dia? </p>

                              <p>04) Quantos dias na semana você pretende trabalhar no projeto?</p>

                        </form>

                    </div>


                    </Formulario>


               </>

          )
     }
}

   
