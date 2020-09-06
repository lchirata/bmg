import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Container, Container2, Container3 } from './styles';
import Header from '../../components/Header/index';

import { FiCheck, FiInstagram, FiFacebook, FiTwitter,} from "react-icons/fi";


import fotoGastro from '../../images/fotoGastronomia.jpg';
import fotoNegocios from '../../images/fotoNegocios.jpg';


export default class Main extends Component {

    render() {

        return (
            <>
                <Header />


                            
                <Container>



                    <div className="titulo">
                        <h1>Sua oportunidade de dar o primeiro passo para o seu sonho.</h1><br/>
                            <h2>Você planeja. <br />Você simula.  <br />Você conquista. <br /></h2><br/>
                        <h3> O BMG só te ajuda com o primeiro investimento. </h3><br/>


                           <Link
                                style={{ textDecoration: 'none'  }}
                                to="/formulario1"
                                className="btn">Simule Agora
                        
                            </Link>

                    </div>

                    <img src={fotoGastro} alt="" />

                       

                    </Container>

                        <Container3>



                        <h4 style={{ color: '#50c2b1', margin: '15px' }}> <FiCheck /> Taxas a partir de 2,02% </h4>
                        <h4 style={{ color: '#50c2b1', margin: '15px' }}> <FiCheck /> Até 50.000 </h4>
                        <h4 style={{ color: '#50c2b1', margin: '15px' }}> <FiCheck /> Pagamento flexível </h4>

                        </Container3> 


                    <Container2>

                    <img src={fotoNegocios} alt="" />

                        <div>
                            <h1 className="abrir-conta">Ainda não tem uma conta no BMG? <p>Abra sua conta online!</p>
                             < br />< br />
                                    <Link
                                            style={{ textDecoration: 'none'  }}
                                            to="/formulario1"
                                            className="btn">Clique aqui
                                    
                                    </Link>

                                    </h1>
                            <h1 className="abrir-conta">Já possui uma conta?  <p>Ative a função Empreende Mulher</p>
                            < br />< br />
                                    <Link
                                            style={{ textDecoration: 'none'  }}
                                            to="/"
                                            className="btn">Clique aqui
                                    
                                    </Link>
                                </h1>
                                    <p></p>
                                <h2>É tudo 100% gratuito!</h2>
                                <h1 className="planejamento">O planejamento para realizar seu projeto na palma das mãos.</h1>
                            </div>

                            







                    </Container2>

                    < hr />
                    <Container>



                    <footer >
                        <p className="siga-nos">Siga-nos nas redes sociais!</p>
                        <FiInstagram className="insta" />
                        <FiFacebook className="face" />
                        <FiTwitter className="twitter" />
                        <div>
                            <p className="informcoes">Centro de Ajuda</p>
                            <p className="informcoes">Termos e Condições</p>
                            <p className="informcoes">Política de Privacidade</p>
                        </div>
                    </footer>


                    </Container>
            </>

        )
    }
}