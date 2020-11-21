import style from 'styled-components/native'

const ButtonBlue = style.TouchableOpacity`
  background-color: #3498db;
  border-color: #3498db;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 90%;
`;
const ButtonOrange = style.TouchableOpacity`
  background-color: #f39c12;
  border-color: #f39c12;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 90%;
`;
const ButtonGray = style.TouchableOpacity`
  background-color: #bdc3c7;
  border-color: #bdc3c7;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 90%;
`;
const ButtonTransparente  = style.TouchableOpacity`
  background-color: #fff;
  border-color: #fff;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 90%;
`;
const TextButton = style.Text`
  color: #333;
  font-weight: bold;
  text-align: center;
`;

export{
  ButtonBlue,
  ButtonOrange,
  ButtonGray,
  ButtonTransparente,
  TextButton
}