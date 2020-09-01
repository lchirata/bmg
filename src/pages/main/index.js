import React, { Component } from 'react';

import { Container } from './styles';
import Header from '../../components/Header/index';

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

                 <img src={mainImage} alt=""/>
                </div>
                
                

                <button> Sumile agora </button>

                

                <footer>
                    BMG
                    insta 
                    tweeter
                    facebook
                </footer>
                </Container>
            </>

        )
    }
}