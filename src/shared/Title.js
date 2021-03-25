import styled from 'styled-components';

const Title = styled.h1`
    color: ${props => props.secondary ? props.theme.colors.secondary : props.theme.colors.primary};
`;

export default Title;