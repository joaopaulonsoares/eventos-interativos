import styled from 'styled-components';

export const LineCard = styled.div`
    width: 100%;
    border: 5px solid var(--gray-200);
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div:first-child {
        padding-top: 0rem;
    }
    &:hover {
        border: 5px solid var(--gray-300);
    }

    .lineCardHeader{

        margin-bottom: 0;

        .calendar {
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;

            .weekDay {
                background-color: var(--blue-100);
                font-size:.6rem;
                min-width:6.5em;
                padding: .3rem 0;
                text-align: center;
                text-transform: uppercase;
                border-radius: 1rem;
                color: var(--white);
                font-weight: 600;
            }
            .dayNumber{
                color: var(--gray-400);
                font-weight: 700;
                margin: 0;
                padding: 0;
                border: 0;
                outline: none;
                text-align: center;
                font-size: 1.5rem;
            }
            .monthAbbr{
                color: var(--gray-400);
                font-size: 1rem;
                margin: 0;
                padding: 0;
                border: 0;
                outline: none;
                text-align: center;
                text-transform: capitalize;
            }
            .hour{
                border-radius: 0.5rem;
                color: var(--gray-400);
                font-size: 1rem;
                margin: 0;
                padding: 0;
                border: 0;
                outline: none;
                text-align: center;
                text-transform: capitalize;
                padding: 0.3rem;
                
                svg {
                    padding-right: 0.2rem;
                }
            }
        }
    }

    .contentContainer{
        width: 80%;
        margin-bottom: 0;
        display:flex;
        flex-direction: column;
    }

    .lineCardContent {
        width: 100%;
        margin-bottom: 0;

        .info {
            min-height: 80%;
            background-color: var(--gray-200);
            border-radius: 10px;
            padding: 0.5rem;
            margin-bottom: 0;

            .title{
                font-size: 1rem;
                font-weight: 700;
            }

        }
    }

    .lineCardContentFooter {
        width: 100%;
        padding-top: 0.5rem;
        margin-bottom: 0;
        display:flex;
        flex-direction:row-reverse;
        align-items: flex-end;
        button {
            margin-bottom: 0;
            span {
                color: var(--gray-400);
                font-size: 1.2rem;
                font-weight: 700;
            }
            text-decoration: underline;
        }            
    }

`;
