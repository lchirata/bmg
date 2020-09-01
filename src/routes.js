import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Main from './pages/main';

const Routes = () => (
    <BrowserRouter>
        <switch>
            <Route exact path="/"  component={Main}  />    
        </switch>
    </BrowserRouter>
);

export default Routes;