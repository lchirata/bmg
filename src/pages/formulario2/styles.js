import styled from 'styled-components';

export const Container = styled.div`

        margin-left:280px;
        padding-left:290px; 
        padding:5px;
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
        font-size:30px;
        text-align:center;
        opacity:0.4;
        background:#aaa69d;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 1);
    }
    .titulo2{
        width:290px;
        margin-top:20px;
        margin-left:30px;
        padding-top:15px;
        padding-left:18px;
        border-radius:3px;
        font-size:35px;
        font-weight:60;
        align-items:center;


        background: #50C2B1;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 1);
        opacity:0.8;
    }

    .titulo3{
        width:290px;
        margin-top:20px;
        margin-left:30px;
        border-radius:3px;
        padding-top:15px;
        padding-left:25px;
        font-size:30px;
        font-weight:30;
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


export const Formulario = styled.div`
        text-align:center;
        margin:20px;
        

    h3 {
        font-size:26px;
        padding: 20px 10px;
        text-align:center;
        font-weight:10;  
        /* color:#FC6404; */
    }

    h4 {
        font-weight:10;  
        font-size:24px;
    }

    h2 {
        margin:30px;
        font-weight:10;  
    }



    .formulario {
        justify-content:row;
        align-items:center;
    }

    .name {
        margin:10px;
    }

    .confirm {
        size:10px;
        padding:15px;
        background:#ffda79;
        border-width:1.5px;
        border-style:none;
        border-radius:3px;
        text-decoration:none;


    }

    .exemplo p {
        margin:10px;
        font-size:20px;
        font-weight:20;
    }

    .confirm{
        size:10px;
        padding:15px;
        color:#FFF;
        background:#FC6404;
        opacity:0.8;
        border-width:1.5px;
        border-style:none;
        border-radius:3px;
        text-decoration:none;
    }


    `;