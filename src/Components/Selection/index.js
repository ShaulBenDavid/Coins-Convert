import * as S from './style';

const Selection = ({ HandleSelect, selectionValue, i, e}) => {
    return (
            <S.StyledSelect  name={e} id="coins" onChange={(event) => HandleSelect(event,i)}>
                {selectionValue.map((e, i) => {
                    return (
                        <option value={e[1]} key={i}>{e[0]}</option>
                    )})
                }
            </S.StyledSelect>
    );
}

export default Selection;