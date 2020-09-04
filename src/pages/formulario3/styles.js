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
        font-weight:40;
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
        padding-left:35px;
        border-radius:3px;
        font-size:35px;
        font-weight:40;
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
        font-size:30px;
        font-weight:40;
        align-items:center;
        background: #50C2B1;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 1);
        opacity:0.8;

    }

    img {
        width:35px;
        height:35px;
        /* margin:5px */
    }


    `;


export const Simulacao = styled.div`
        justify-content:center;
        text-align:center;
        display:flex;
        margin:30px;
        font-weight:10;


        div {
            border-color:gray;
            border-width:0.2px;
            box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 2.5);
            border-radius:3px;
            background:#f7f1e3
        }
       
       header {
           background:#f7f1e3;
           font-size:35px;
           box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 2.5);
           border-radius:3px;
           font-weight:12;
       }

       h1 {
            margin:15px;
           font-size:26px;
           font-weight:12;
       }

       h3 {
           margin:5px;
           font-weight:12;

       }

       .confirm {


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