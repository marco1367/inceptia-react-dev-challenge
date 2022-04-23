import React from 'react'
import styled from 'styled-components'
//actions:
import { GetNextCases } from '../../../../../redux/casesList/casesListAction';
//utils:
import UrlConcatDate from '../../../../../utils/UrlConcatDates';
//react-icons:
import { BiFirstPage, BiLastPage } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';



export default function Pagination() {

    const dispatch = useDispatch();
    const params = useParams();

    const casesListStore = useSelector((store) => store.casesList);
    const userStore = useSelector(store => store.user);
    const casesDatesStore = useSelector(store => store.casesDates);

    const hadleClick = () => {
        // const Url = UrlConcatDate(casesListStore.list.next, casesDatesStore.date_Start, casesDatesStore.date_End)
        // dispatch(GetNextCases(userStore.token, Url));
        dispatch(GetNextCases(userStore.token, casesListStore.list.next));

    };
    console.log(casesDatesStore);//----


    return (
        <>
            {
                (params.id && casesListStore.list) &&
                <Container>
                    <div 
                        className='bttn' 
                        style={  {display: casesListStore.list.previous ? 'flex' : 'none' } } 
                    >
                        <BiFirstPage />
                    </div>
                    <div className='text-numbers' >
                        <p>
                            act - {casesListStore.list.count}
                        </p>
                    </div>
                    <div 
                        className='bttn' 
                        style={  {display: casesListStore.list.next ? 'flex' : 'none' } } 
                    >
                        <BiLastPage onClick={() => hadleClick()} />
                    </div>
                </Container>
            }
        </>
    )
}


const Container = styled.div`
    border: 1px solid black;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .bttn{
        border: 1px solid black;
        

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .text-numbers{
        border: 1px solid black;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
`;