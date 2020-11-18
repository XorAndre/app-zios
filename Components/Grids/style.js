import style from 'styled-components/native'
//Componentes
const Container = style.View`
    margin: 0 auto;
    width: 99%;
`;
const Row = style.View`
    margin: 0 auto;
    width: 99%;
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

const Coluna = style.View`
	padding: 10px;
    ${({ Value }) => Value && getColumn(Value)}
`;
export {
    Container,
    Coluna,
    Row
}