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
        background: #ffda79;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 1);
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
            box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 1);
        }
       
       header {
           background:#ffda79;
           font-size:35px;
           box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 1);
           border-radius:3px;
       }
    `;