import styled from 'styled-components';

export const Card = styled.div`
    max-width: 300px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 5px solid var(--gray-200);
    border-radius: 25px;

    &:hover {
        border: 5px solid var(--gray-300);
        cursor: pointer;
    }

    .cardHeader{
        width: 100%;
        height: 10%;
        min-height: 10%;
        padding: 10px;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1rem;
    }
    
    .thumbnail{
        width: 100%;
        min-height: 70%;
        max-height: 70%;
        margin: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 100%;
            width: 100%;
            object-fit: fill;
        }
    }

    .cardFooter{
        width: 100%;
        height: 15%;
        padding: 1rem;
        margin:0;
    }


`;
