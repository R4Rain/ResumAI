import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { animateScroll as scroll } from 'react-scroll'


const Nav = styled.nav`
    background: #fff;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0px 24px;
    
    box-shadow: ${({ scrollNav }) => (scrollNav ? '0px 0px 10px 0px rgba(0,0,0,0.2)' : 'none')};

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: 10px;
`

const NavLogo = styled(LinkR)`
    color: #010606;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    font-family: Aquire;
`

const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px){
        display: flex;
        justify-content: flex-end;
        align-items: center;
        transform: translate(-100%, 60%)
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

const NavMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 20px;
    @media screen and (max-width: 760px){
        display: none;
    }
`

const NavItem = styled.li`
    height: 80px;
`

const NavLinks = styled(LinkS)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover{
        color: #01bf71;
    }
    &.active {
        border-bottom: 3px solid #01bf71;
        transition: 0.3s all ease;
        padding-top: 3px;
        color: #01bf71;
    } 
`;

const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 760px){
        display:none;
    }
`

const NavBtnSignUp = styled(LinkR)`
    border-radius: 10px;
    background: #01BF71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        background: #04de85;
    }
`


const NavBtnLogin = styled(LinkR)`
    border-radius: 10px;
    background: #fff;
    white-space: nowrap;
    padding: 8px 20px;
    color: #01BF71;
    font-size: 16px;
    font-weight: bold;
    outline: 1px solid #01BF71; 
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 20px;

    &:hover{
        transition: all 0.2s ease-in-out;
        outline: 0px solid transparent;
        border: 2px solid #04de85;
    }
`

const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        window.removeEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Nav scrollNav={ scrollNav }>
                <NavLogo to="/" onClick={ toggleHome }>
                        ResumAI
                </NavLogo>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars size={'2rem'} color='#010606'/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={1}
                                offset={-80}
                            >About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={1}
                                offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLogin to='/login'>Login</NavBtnLogin>   
                        <NavBtnSignUp to='/signup'>Sign Up</NavBtnSignUp>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar