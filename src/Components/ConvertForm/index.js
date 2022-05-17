import * as S from './style';
import { useState } from 'react';
import Selection from '../Selection';
import Button from '../Button';

const CALC_TYPE = ["SelectForm", "SelectTo"];

const ConvertForm = ({ coinTypeAndValue, addCalcValue }) => {
    const [myValue, setMyValue] = useState('');
    const [coinClacValueFrom, setCoinCalcValueFrom] = useState(1);
    const [coinClacValueTo, setCoinCalcValueTo] = useState(1);

    let nf = new Intl.NumberFormat('en-US');


    const handleSubmit = (event) => {
        event.preventDefault();

        let calc = ((myValue / coinClacValueFrom) * coinClacValueTo).toFixed(2);
        calc = nf.format(calc);
        addCalcValue(calc);
    }
    
    const handleChange = (event) => {
        const value = event.target.value;
        setMyValue(value);
    }

    const HandleSelect = (event, id) => {
        if (id === 0) {
            setCoinCalcValueFrom(event.target.value) 
        } else {
            setCoinCalcValueTo(event.target.value)
        }
    }
    
    return (
        <S.StyledForm onSubmit={handleSubmit}>
            <S.StyledInput type="number" onChange={handleChange} value={myValue} placeholder="Choose Amount" />
            <S.SelectionContainer>
                { coinTypeAndValue &&
                    CALC_TYPE.map((e, i) => {
                    return (
                        <Selection HandleSelect={HandleSelect} e={e} i={i} selectionValue={coinTypeAndValue} key={i}/>
                    )
                })}  
                </S.SelectionContainer>
                <Button type='submit'>Claculate</Button>
        </S.StyledForm>
    );
}

export default ConvertForm;