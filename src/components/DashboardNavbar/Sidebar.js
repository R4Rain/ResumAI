import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaBars, FaUserCircle } from 'react-icons/fa'
import SubMenu from './SubMenu'
import { useAuth } from '../../contexts/AuthContext'
import { IconContext } from 'react-icons/lib'

const Nav = styled.div`
    background: #fff;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: fixed;
    width: 100%;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2);
`

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 60px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
`

const Logo = styled.div`
    margin-right: 2rem;
    font-family: Aquire;
    text-decoration: none;
    font-size: 1.5rem;
    color: #000;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const SidebarNav = styled.nav`
    background: #15171c;
    width: 200px;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 4px 0px 5px 0px rgba(0,0,0,0.25);
`

const SidebarWrap = styled.div`
    width: 100%;
`

const Profile = styled.div`
    padding-left: 10px;
    background: #6555bd;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 100px;

    border-top-right-radius: 15px;
`

const ProfileTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10%;
`

const ProfileName = styled.p`
    font-size: 15px;
    color: #f5f5f5;
    font-weight: bold;
    cursor: default;
`
const ProfileTitle = styled.p`
    font-size: 12px;
    color: #f5f5f5;
    cursor: default;
`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const sidebarRef = useRef(null)
    const { currentUser } = useAuth()

    const showSidebar = () => {
        setSidebar(!sidebar)
    } 

    useEffect(() =>{
        function handleClickOutside(event) {
            if(sidebar && sidebarRef.current && !sidebarRef.current.contains(event.target)){
                    setSidebar(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [sidebarRef, sidebar])
    return (
        <>
            <Nav>
                <NavIcon to="#">
                    <FaBars onClick={showSidebar} style={{color: '#000'}}/>
                </NavIcon>
                <Logo>ResumAI</Logo>
            </Nav>
            <IconContext.Provider value={{color: '#fff'}}>
                <SidebarNav sidebar={sidebar ? 1 : 0} ref={sidebarRef}>
                    <Profile> 
                        <FaUserCircle size={40}/>
                        <ProfileTextWrapper>
                            <ProfileName>{currentUser.displayName}</ProfileName>
                            <ProfileTitle>Job Hunter</ProfileTitle>
                        </ProfileTextWrapper>
                    </Profile>

                    <SidebarWrap>
                        <SubMenu/>
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
