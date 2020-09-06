import React, { Component } from 'react';

import api from '../../services/api';

import { Container } from './styles';



class ListClient extends Component {

    state = {
        clientList: [],
    };



    async componentDidMount() {
        const response = await api.get('/clientes');
        this.setState({ clientList: response.data });
    }


    render() {

        const { clientList } = this.state;
        return (
            <Container>
                <div className="App">
                    <div>
                        <h1>Clientes que entraram em contato </h1>
                        <table>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>empresa</th>
                            <th>Telefone</th>
                        </table>

                        {console.log(clientList)}
                        {clientList.map(cliente => (
                            <p key={cliente.id}>

                                <td>{cliente.nome}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.email}</td>
                                <td> {cliente.empresa}</td>
                                <td>{cliente.telefone}</td>


                            </p>


                        ))}


                    </div>
                </div>

            </Container>
        );
    }
}

export default ListClient;