import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/DashboardNavbar/Sidebar'


const Container = styled.div`
    background-color: #e5e3e6;
    height: 100vh;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`

const WrapperBox = styled.div`
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.25);
`

const Title = styled.h1`
    font-size: 60px;
    font-weight: 700;
    text-align:center;
    letter-spacing: 2px;
    color: #000;
`

const Clock = styled.div`
    margin-top: 20px;
    font-size: 50px;
    font-weight: 500;
    text-align:center; 
    color: #000;
`

const DashboardHome = () =>{
    const [clockState, setClockState] = useState('');
    
    useEffect(() => {
       return setInterval(() =>{
           const date = new Date();
           setClockState(date.toLocaleTimeString());
       })
    }, [])
    return(
        <>
            <Sidebar/>
            <Container>
                <Wrapper>   
                    <WrapperBox>
                        <Title>Welcome to ResumAI!</Title>
                        <Clock> { clockState } </Clock>
                    </WrapperBox>
                </Wrapper>
            </Container>
        </>
    )
}

export default DashboardHome