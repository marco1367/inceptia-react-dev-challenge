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
            <div className='input-container' >
                <p>Desde</p>
                <input
                    type='date'
                    name='date_Start'
                    value={casesDatesStore.date_Start}
                    max={dateNow}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className='input-container' >
                <p>Hasta</p>
                <input
                    type='date'
                    name='date_End'
                    value={casesDatesStore.date_End}
                    max={dateNow}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </Container>
    )
}


const Container = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .input-container{
        border: 1px solid #007fff;

        input{
            width: 250px;
            border: none;
            padding: 7px;
        }
        p{
            font-size: 12px;
            margin: 0;
            padding: 0;
            padding-left: 8px;
            color: #696969;
        }
    }
`;