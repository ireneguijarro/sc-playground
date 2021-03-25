import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background-color: #8CB2D1;
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
    }}
`;

export default Button;