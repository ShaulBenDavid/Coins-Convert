import styled from 'styled-components';

export const StyledButton = styled.button`
    display: block;
    height: 30px;
    width: 100%;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    -webkit-box-shadow: 1px 1px 2px 1px #001449; 
    box-shadow: 1px 1px 2px 1px #001449;
    background-color: white;
    color: #001449;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all .3s;

    &:active {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
`;