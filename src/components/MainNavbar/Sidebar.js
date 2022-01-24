import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
    color: #000000;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const SidebarWrapper = styled.div`
    color: #fff;
`

const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(5, 60px);
    }
`


const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000000;
    cursor: pointer;
    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


const SidebarRoute = styled(LinkR)`
    border-radius: 10px;
    background: ${({ login }) => (login ? '#fff' : '#01bf71')};
    white-space: nowrap;
    padding: ${({ login }) => (login ? '11px 68px' : '13px 62px')};
    color: ${({ login }) => (login ? '#000000' : '#fff')};
    font-size: 16px;
    font-weight: bold;
    outline: ${({ login }) => (login ? '1px solid #01BF71' : 'none')};
    border: ${({ login }) => (login ? '2px solid transparent' : 'none')};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 20px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ login }) => (login ? 'initial' : '#04de85')};
        outline: ${({ login }) => (login ? '0px solid transparent' : 'none')};
        border: ${({ login }) => (login ? '2px solid #01BF71' : 'none')};
    }
`



const Sidebar = ({ isOpen, toggle }) =>{
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>

                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute login={1} to="/login">Login</SidebarRoute>
                    <SidebarRoute login={0} to="/signup">Sign Up</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar