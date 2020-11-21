import style from 'styled-components/native'

const Description = style.Text`
  font-size: 16px;
  text-align: center;
  width: 280px;
`;
const Hero = style.Text`
  color: #f39c12;
  font-size: 20px;
  margin: 10px 0;
  text-align: center;
`;
const HeroDark = style.Text`
  color: #333;
  font-size: 20px;
  margin: 10px 0;
  text-align: center;
`;
export{
  Description,
  Hero,
  HeroDark
}