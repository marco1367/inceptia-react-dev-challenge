import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
//components:
import CasesList from './cases-list/CasesList';
//actions:
import { GetCases } from '../../../../redux/casesList/casesListAction';



export default function Content() {
    const [casesList, setCasesList] = useState();

    const dispatch = useDispatch();
    const {id} = useParams();
    const userStore = useSelector(store => store.user);
    const casesDateStore = useSelector(store => store.casesDates);
    const casesListStore = useSelector(store => store.casesList)

    useEffect(() => {
        dispatch(GetCases(userStore.token, id, casesDateStore.date_Start, casesDateStore.date_End));
    }, [casesDateStore, userStore]);


    return (
        <Container>
            <CasesList List={casesListStore} />
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    border: 1px solid black;
`;