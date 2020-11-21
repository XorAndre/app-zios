import style from 'styled-components/native'

const Template = style.View`
  padding: 10px 0;
  font-size: 16px;
`;
const Content = style.View`
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 100px 0 10px 10px;
 width: 300px;
`;
const ContentOK = style.View`
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 10px 25px;
 width: 300px;
`;
const Logo = style.Image`
  margin-top: 180px;
`;
export{
  Template,
  Content,
  ContentOK,
  Logo
}