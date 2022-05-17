import styled from 'styled-components';


export const StyledForm = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
`;

export const SelectionContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    gap: 10px;

`;

export const StyledInput = styled.input`
    max-width: 100%;
    height: 30px;
    border: none;
    border-bottom: 2px solid #001449;
    text-align: center;
    border-radius: 3px;
    color: #001449;
    -webkit-box-shadow: 1px 1px 2px 1px #001449; 
    box-shadow: 1px 1px 2px 1px #001449;

    &:focus {
        outline: none;
    }
`;