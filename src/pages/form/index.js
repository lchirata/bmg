import React, { Component } from 'react';

import Header from '../../components/Header/index';
import { Container } from './styles';

export default class Main extends Component {

    render() {

        return (
            <>
                <Header />
                <Container>
                <h1>Dados para simulação</h1>


                <br />

                <h3>
                     - email
                </h3>
                <h3>
                     - Limite desejado
                </h3>
                <h3>
                     - finalizadade do crédito
                </h3>


                <br>
                </br>

                <h1>Dados da empresa</h1>

                <h3>
                     - voce é dono da empresa?
                </h3>
                <h3>
                     - CNPJ
                </h3>
                <h3>
                     - Media de faturamento anual
                </h3>
                <h3>
                     - Quantidade de parcela
                </h3>
                </Container>
            </>

        )
    }
}