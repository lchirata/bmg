import React from 'react';
import { Link } from "react-router-dom";

import { Contaneir } from './styles';
import logo from '../../images/logo2.png'

export default function Header() {
    return (
        <Contaneir>
            <div>
                <Link style={{ color: "#FFF",textDecoration: 'none', fontSize: '32px' }} to="/"> <img src={logo} alt=""/></Link>
                

            </div>
            <div>
<a style={{ color: "#FFF", fontSize:"14px",fontWeight:"0.1",textDecoration: 'none' }} href="https://www.bancobmg.com.br/internetbank/IBIndex.aspx" >Entrar</a>

            </div>
        </Contaneir>
    );
}