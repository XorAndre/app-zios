import style from 'styled-components/native'
//Componentes
const ButtonOrange = style.TouchableOpacity`
    background-color: orange;
    border-color: orange;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    color: #333;
    font-family: System;
    font-weight: bold;
    margin-top: 10px;
    padding: 15px 4rem;
    text-align: center;
    width: 99%;
`;
const ButtonGray = style.TouchableOpacity`
    background-color: gray;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    color: #FFF;
    font-family: System;
    font-weight: bold;
    margin-top: 10px;
    padding: 15px 4rem;
    text-align: center;
    width: 99%;
`;
export {
    ButtonOrange,
    ButtonGray
}