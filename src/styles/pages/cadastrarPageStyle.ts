import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 3rem; 
    font-weight: bold;
    text-align: center;
    margin: 1rem;
`;

export const Container = styled.div`
    max-width: 800px;
    height: 90vh;
    margin: 0 auto;
`;

export const FormDiv = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;

export const DateAndHourFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2%;
`;

export const ScheduleEventTimeFormControl = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 1.25rem;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
`;
