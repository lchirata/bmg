import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Main from './pages/main';
import Form from './pages/formulario1';
import Form2 from './pages/formulario2';
import Form3 from './pages/formulario3';
import List from './pages/ListartClientes/index';



    

const Routes = () => (
    <BrowserRouter>
        <switch>
            <Route exact path="/"  component={Main}  /> 
            <Route path="/formulario1" component={Form} />   
            <Route path="/formulario2" component={Form2} />   
            <Route path="/formulario3" component={Form3} /> 
            <Route path="/listarclientes" component={List} /> 
            
        </switch>
    </BrowserRouter>
);

export default Routes;