import style from 'styled-components/native'
//Componentes
const InputLogin = style.TextInput`
    background-color: #fff;
    border-color: #333;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    color: #ffff;
    margin-top: 10px;
    padding: 15px 10px;
    width: 99%;
`;
const Form = style.View`
    align-items: center;
    justify-content: center; 
    margin: 18rem auto;
    width: 90%;
`;
export {
    InputLogin,
    Form
}