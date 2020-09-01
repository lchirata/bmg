import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Main from './pages/main';
import Form from './pages/form';

const Routes = () => (
    <BrowserRouter>
        <switch>
            <Route exact path="/"  component={Main}  /> 
            <Route path="/form" component={Form} />   
        </switch>
    </BrowserRouter>
);

export default Routes;