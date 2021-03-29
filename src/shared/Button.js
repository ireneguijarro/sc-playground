import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background-color: ${props => props.theme.colors.secondary};
    padding: .25em;
    margin: .25em;
    ${props => {
        switch (props.size) {
            case 'sm':
                return "font-size: 12px";
            case 'lg':
                return "font-size: 24px";        
            default:
                return "font-size: 16px";
        }
    }};
    border: 1px solid white;
    :hover {
        transition: background-color 0.5s ease;
        background-color: ${props => props.theme.colors.primary};
    }
`;

export default Button;