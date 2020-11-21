import style from 'styled-components/native'

const Container = style.View`
  height: 100%;
  width: 100%;
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

const Col = style.View`
	padding: 5px;
  ${({ Value }) => Value && getColumn(Value)}
`;
const Row = style.View`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;
const RowLine = style.View`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
`;
export{
  Container,
  Col,
  Row,
  RowLine
}