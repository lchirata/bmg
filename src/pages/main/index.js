import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Container } from './styles';
import Header from '../../components/Header/index';

import { FiInstagram, FiFacebook, FiTwitter, FiCheck } from "react-icons/fi";

import mainImage from '../../images/mainImage.jpg'


export default class Main extends Component {

    render() {

        return (
            <>
                <Header />
                <Container>
                    <div className="titulo">
                        <h1>Limite de Crédito pré-aprovado</h1>
                        <p>capital de gito rotativo para pequenas empresas</p>

                        <img src={mainImage} alt="" />
                        
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <Link  
                    style={{ textDecoration: 'none' }} 
                    to="/form" 
                    className="btn">Simule Agora
                    </Link>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>




                    <div className="vantagens">
                        <h2 style={{color:'#706fd3', margin:'15px'}}> <FiCheck /> Taxas a partir de 2,99% </h2>
                        <h2 style={{color:'#706fd3', margin:'15px'}}> <FiCheck /> Até 50.000 </h2>
                        <h2 style={{color:'#706fd3', margin:'15px'}}> <FiCheck /> Pagamento flexível </h2>
                    </div>
                    <br />
                    <br />

                    <div className="abrir-conta">
                        <h3>Ainda nao tem conta?</h3>
                    </div>
                    <br />
                    <br />

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>


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