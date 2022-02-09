import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { RiArrowDownSFill, RiArrowUpSFill, RiNewspaperFill, RiLogoutBoxFill } from 'react-icons/ri'
import { IoIosSettings } from 'react-icons/io'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 17px;

    &:hover{
        background: #252831;
        border-left: 4px solid #3e3475;
        cursor: pointer;
    }
`

const SidebarLabel = styled.span`
    margin-left: 16px;
`
const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover{
        background: #4C3F91;
        cursor: pointer;
    }
`


const SubMenu = () =>{
    const [subnav, setSubnav] = useState(false)
    const { logout } = useAuth()
    const navigate = useNavigate()

    const showSubnav = () =>{
        setSubnav(!subnav)
    }
    async function handleLogout(handle) {
        await logout()
        navigate('/login')
    }   
    return(
        <>
            <SidebarLink to='/dashboard'>
                <div>
                    <AiFillHome/>
                    <SidebarLabel>Home</SidebarLabel>
                </div>
            </SidebarLink>
            <SidebarLink to='/dashboard/upload-resume'>
                <div>
                    <RiNewspaperFill/>
                    <SidebarLabel>Recommend a Job</SidebarLabel>
                </div>
            </SidebarLink>
            <SidebarLink to='/dashboard/my-resume'>
                <div>
                    <RiNewspaperFill/>
                    <SidebarLabel>My Resume</SidebarLabel>
                </div>
            </SidebarLink>
            <SidebarLink to='#' onClick={showSubnav}>
                <div>
                    <IoIosSettings/>
                    <SidebarLabel>Settings</SidebarLabel>
                </div>
                <div>
                    {subnav ? <RiArrowDownSFill/> : <RiArrowUpSFill/>}
                </div>
            </SidebarLink>
            {subnav &&
                <DropdownLink to='#' onClick={handleLogout}>
                    <RiLogoutBoxFill/>
                    <SidebarLabel>Sign Out</SidebarLabel>
                </DropdownLink> 
            }
        </>
    )
}

export default SubMenu