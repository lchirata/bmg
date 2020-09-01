import React from 'react';

import { Contaneir } from './styles';

export default function Header() {
    return (
        <Contaneir>
            <h1 
            style={{
                color:"#dff9fb",

            }}
            
            >BMG</h1>

            <button>
                Home
            </button>

            <button>
                Ajuda
            </button>

        </Contaneir>
    );
}