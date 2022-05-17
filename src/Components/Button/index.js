import * as S from './style';

const Button = ({ children, ...otherProps }) => {
    return (
        <S.StyledButton {...otherProps}>{children}</S.StyledButton>
    );
}

export default Button;