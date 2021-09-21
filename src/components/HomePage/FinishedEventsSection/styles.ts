import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: auto;
    

    .sectionHeader {
        border-bottom: 1px solid var(--gray-400);
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-size: 1rem;
            font-weight: bold;
        }

        .inputGroup {
            max-width: 25%;
            margin: 0 0 5px 0;
            div:first-child {
                padding-top: 0rem;
            }

            input {
                color: var(--gray-400);            }
        }
    }

    .children{
        display: flex;
        margin: 0;
    }

    .finishedEventsSectionFooter{
        width: 100%;
        display: flex;
        justify-content: center;
        
        button {
            background-color: var(--gray-200);
            padding: 1.5rem;
            border-radius: 10px;

            transition: 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

`;
