import React from 'react';
import { Link } from "react-router-dom";

import { Contaneir } from './styles';

export default function Header() {
    return (
        <Contaneir>
            <div>
                <Link style={{ color: "#FFF",textDecoration: 'none', fontSize: '32px' }} to="/"> logo</Link>
                {/* <img src={logo} alt=""/> */}

            </div>
            <div>
                <a style={{ color: "#FFF", fontSize:"18px",fontWeight:"0.2",textDecoration: 'none' }} href="https://www.bancobmg.com.br/internetbank/IBIndex.aspx" >Entrar</a>
                <a style={{ color: "#FFF", fontSize:"18px",fontWeight:"0.2",textDecoration: 'none' }} href="/" >Ajuda</a>
            </div>
        </Contaneir>
    );
}