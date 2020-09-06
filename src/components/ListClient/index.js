import React, { Component } from 'react';

import api from '../../services/api';



class ListClient extends Component {

    state = {
        clientList: [],
    };



    async componentDidMount() {
        const response = await api.get('/clientes');

        this.setState({ clientList: response.data });

        // this.setState({
        //     clientList: response.data.map(cliente => ({
        //         id:cliente.id,
        //         name:cliente.nome,
        //         cpf:cliente.cpf,
        //         email:cliente.email,
        //         telefone:cliente.telefone,
        //         empresa:cliente.empresa,
        //         cnpj:cliente.cnpj
        //     }))
        // })




    }


    render() {

        const { clientList } = this.state;
        
    //     const clientLists = ({cliente}) => (
    //         <h1>
    //             {cliente.map(clientList =>(
    //                 <li key={clientList.id}>
    //                     <p>{clientList.name}</p>

    //                 </li>
    //             ))}
    //         </h1>
    //     )


       

        return (

            <div className="App">
                <div>
                    <h1>teste</h1>

                {console.log(clientList)}
                {clientList.map(cliente => (
                    <li key={cliente.id}>
                        <h2>
                            <strong>
                                Nome
                            </strong>
                            {cliente.nome}
                        </h2>
                    </li>
                ))}


                </div>
            </div>
        );
    }
}

export default ListClient;