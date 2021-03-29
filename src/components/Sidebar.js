import styled from 'styled-components';

const Sidebar = styled.div`
    background-color: ${props => props.theme.colors.primary};
    width: 150px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* All childs selector */
    > * {
        margin: 4px;
    }
`;

export default Sidebar;