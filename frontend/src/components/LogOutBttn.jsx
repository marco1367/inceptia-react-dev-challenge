import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
//actions:
import { UserLogOut } from '../redux/user/userAction';

export default function LogOutBttn() {

    const dispatch = useDispatch();

    return (
        <Bttn>
            <p onClick={() => dispatch(UserLogOut())}>
                Log out
            </p>
        </Bttn>
    )
}

const Bttn = styled.div`
    p{
        color: black;
        cursor: pointer;
    }
`;
