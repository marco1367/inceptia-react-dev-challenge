import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { setDates } from '../../../../../redux/cases/casesAction'


export default function Dates() {

    const dateNow = dayjs().format('YYYY-MM-DD')

    const dispatch = useDispatch();
    const casesDatesStore = useSelector(store => store.casesDates);

    const handleChange = (event) => {
        const name = event.target.name;
        dispatch(setDates({
            ...casesDatesStore,
            [name]: event.target.value
        }));
    }

    return (
        <Container>
            <input
                type='date'
                name='date_Start'
                value={casesDatesStore.date_Start}
                max={dateNow}
                onChange={(e) => handleChange(e)}
            />

            <input
                type='date'
                name='date_End'
                value={casesDatesStore.date_End}
                max={dateNow}
                onChange={(e) => handleChange(e)}
            />
        </Container>
    )
}


const Container = styled.div`
    border: 1px solid black;

    input{
        margin: 5px;
    }
`;