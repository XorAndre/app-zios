import style from 'styled-components/native'

const Template = style.View`
  padding: 10px 5px;
  font-size: 16px;
`;
const Content = style.View`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 260px;
`;
const Logo = style.Image`
  margin-top: 180px;
`;
export{
  Template,
  Content,
  Logo
}