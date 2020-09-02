import styled from 'styled-components';

export const Container = styled.div`

        margin-left:280px;
        padding-left:290px; 
        padding:5px;
        /* box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 1); */
        width: 100vw;
        height: 100%;
        display:flex;

    div {
        width:450px;
        height:70px;
        margin-top:20px;
    }

    .titulo1{
        width:290px;
        padding-top:15px;
        border-radius:3px;
        border-color:black;  
        font-weight:60;
        font-size:35px;
        text-align:center;
        background: #ffda79;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 1);
    }
    .titulo2{
        width:290px;
        margin-top:20px;
        margin-left:30px;
        padding-top:15px;
        padding-left:35px;
        border-radius:3px;
        font-size:35px;
        font-weight:60;
        align-items:center;
        opacity:0.4;
        background:#aaa69d;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 1);
    }
    .titulo3{
        width:290px;
        margin-top:20px;
        margin-left:30px;
        border-radius:3px;
        padding-top:15px;
        padding-left:25px;
        font-size:35px;
        font-weight:60;
        align-items:center;
        opacity:0.4;
        background:#aaa69d;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 1);
    }

    img {
        width:35px;
        height:35px;
        /* margin:5px */
    }
    `;


export const Teste = styled.div`

    h3 {

    background: black;

    }

    .formulario {
        justify-content:row;
        align-items:center;
    }

    .name {
        margin:10px;
    }
    `;