import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
//images:
import Logo from './logo.jpg'

export default function NavBar() {

    return (
        <Container>
            <div className='logo-container' >
                <NavLink to={'/'} >
                    <img src={Logo} alt="logo-inceptia"/>
                </NavLink>
            </div>
            <div className='bttns-container' >
                <div className='bttn-container' >
                    <NavLink to={'login'} className={({ isActive }) => isActive ? "is-active" : ""} >LogIn</NavLink>
                </div>
                <div className='bttn-container' >
                    <NavLink to={'dashboard'} className={({ isActive }) => isActive ? "is-active" : ""} >Dashboard</NavLink>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: white;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    .logo-container{
        width: auto;
        height: auto;

        display: flex;
        justify-content: center;
        align-items: center;
        
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            
            img{
                width: 200px;
                height: auto;
            }
        }
    }

    .bttns-container{
        width: auto;
        height: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        .bttn-container{
            margin: 5px;
            padding: 5px;
            a{
                text-decoration: none;
                color: black;
            }
            .is-active{
                color: #63cbd7;
            }
        }
    }
`;