import styled from 'styled-components';


export const HeaderContainer = styled.header`
    height: 7vh;
    border-bottom: 1px solid var(--gray-300);
    margin: 0 auto;
    padding: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
            display: inline-block;
            position: relative;
            padding: 0 0.5rem;
            height: 5rem;
            line-height: 5rem;
            color: var(--gray-300);
            text-decoration: none;
            text-transform: uppercase;
            transition: color 0.2s;
            font-weight: bold;
            font-size: 1rem;

            // Todos depois do primeiro
            & + a {
                margin-left: 2rem;
            }

            &:hover { 
                color: var(--gray-300);
            }

            &.active {
                color: var(--gray-500);
                font-weight: bold;
            }

            &.active::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 1px;
                left: 0;
                background: var(--yellow-500);
            }
        }
    
`;

