import React, { useState } from 'react'
import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import image from '../images/Header-img.svg'
import {Link} from 'react-router-dom'

const Container = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;
`

const TopContent = styled.div`
    z-index: 5;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TopH1 = styled.h1`
    color: #000000;
    font-size: 40px;
    text-align: center;
    font-weight: 900;
    @media screen and (max-width: 760px) {
        font-size: 38px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

const TopP = styled.p`
    margin-top: 24px;
    color: #000000;
    font-size: 24px;
    text-align: center;
    max-width: 650px;

    @media screen and (max-width: 760px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`

const TopBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
const Button = styled(Link)`
    border-radius: 10px;
    background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    z-index: 5;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#04de85' : '#01BF71')};
    }
    @media screen and (max-width: 480px){
        font-size: 14px;
    }

`

const TopImgWrapper = styled.div`
    height: 100%;
    max-width: 555px;
    z-index: 4;
    margin-top: 80px;
    transition: 0.2s all ease;
    &:hover{
        transform: scale(1.02);
    }
`
const TopImg = styled.img`
    width: 100%;
    height: 100%;
`

const Header = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <>
            <Container id="home">
                <TopContent>
                    <TopH1>Know your job from your resume, instantly.</TopH1>
                    <TopP>Improve your chances to get a job based on our application.</TopP>
                    <TopBtnWrapper>
                        <Button 
                            to='/signup'
                            onMouseEnter={onHover} onMouseLeave={onHover}
                            primary={ 1 }
                            dark={ 0 }
                            big={ 1 }
                        >
                            Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </TopBtnWrapper>
                    <TopImgWrapper>
                        <TopImg src={ image } alt="Image"></TopImg>
                    </TopImgWrapper>
                </TopContent>
            </Container>
        </>
    )
}

export default Header
