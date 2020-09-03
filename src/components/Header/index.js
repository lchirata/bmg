import React from 'react';
import { Link } from "react-router-dom";

import { Contaneir } from './styles';


export default function Header() {
    return (
        <Contaneir>
            <div>
                <Link style={{ color: "#FFF",textDecoration: 'none', fontSize: '32px' }} to="/">BMG</Link>
                <p>para elas</p>
            </div>
            <div>
                <a style={{ color: "#FFF", fontSize:"20px",fontWeight:"2px",textDecoration: 'none' }} href="https://www.bancobmg.com.br/internetbank/IBIndex.aspx" >Entrar</a>
                <a style={{ color: "#FFF", fontSize:"20px",fontWeight:"2px",textDecoration: 'none' }} href="/" >Ajuda</a>
            </div>
        </Contaneir>
    );
}