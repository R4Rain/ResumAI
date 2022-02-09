import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/DashboardNavbar/Sidebar";
import PopoutMenu from "../components/DashboardNavbar/PopoutMenu"
import { useStorage } from '../contexts/StorageContext'
import { ImDownload } from 'react-icons/im'
import { FaTrash } from 'react-icons/fa'
import { IoIosSad } from 'react-icons/io'

const Container = styled.div`
    background-color: #e5e3e6;
    height: 100%;
`
const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    padding: 30px;
    padding-top: 80px;
`
const HistoryBox = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.25);
    height: 77vh;
`
const HistoryHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`

const HistoryTitleWrapper = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-start;
`
const HistoryButtonWrapper = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-end;
`

const HistoryTitle = styled.p`
    color: #000;
    font-size: 2rem;
    font-weight: 600;
    white-space: nowrap;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
    }
`

const UploadButton = styled.button`
    padding: 8px 15px;
    background-color: #01BF71;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    &:hover{
        background: #04de85;
    }
    &:disabled{
        background: #04de85;
    }
    @media screen and (max-width: 480px) {
        font-size: 12px;
        padding: 7px 13px;
    }
`

const ResumeContainer = styled.div`
    width: 100%;
    height: 100%;
`

const ResumeTable = styled.div`
    height: 55vh;
    width: 100%;
    overflow-y: overlay;
`

const TopTable = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    color: #fff;

    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    @media screen and (max-width: 480px) {
        font-size: 13px;
    }
`
const TopName = styled.div`
    background-color: #22577E;
    padding: 10px 0px;
    width: 50%;
`

const TopSetting = styled.div`
    background-color: #5584AC;  
    width: 50%;
    padding: 10px 0px;
`

const Resume = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
 
    width: 100%;
    padding: 10px 0px;
    background: #f0f0f0;
    border-bottom: 0.1px solid #92A9BD;

    text-align: center;
    font-size: 1.1rem;
    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`
const ResumeName = styled.div`
    width: 50%;
    font-size: 16px;
    font-weight: 400;
`
const ResumeSetting = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const ResumeDownload = styled.div`
    margin-right: 3%;
    cursor:pointer;
`

const ResumeDelete = styled.div`
    margin-left: 3%;
    cursor:pointer;
`
const DownloadLink = styled.a`
    display: block;
`

const Download = styled(ImDownload)`
    width: 30px;
    height: 30px;
    color: #072227;
    transition: 0.3s all ease;
    &:disabled{
        color: #92A9BD;
    }
    &:hover{
        color: #0c3c45;
    }
`

const Trash = styled(FaTrash)`
    width: 24px;
    height: 24px;
    color: #F05454;
    transition: 0.3s all ease;
    &:disabled{
        color: #92A9BD;
    }
    &:hover{
        color: #ff3333;
    }
`

const NoDataContainer = styled.div`
    height: 55vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const NoDataLabel = styled.p`
    margin-top: 5px;
    font-size: 16px;
`

const MyResume = () =>{
    const { data, deleteFile, getFile, getUrl, url, setUrl} = useStorage()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const toggle = () =>{
        setOpen(!open)
    }
    async function handleDelete (filename){
        setLoading(true)
        try{
            await deleteFile(filename)
        }catch(error){
            console.log(error.message)
        }
        setLoading(false)
    }
    async function handleUrl(filename){
        setLoading(true)
        try{
            await getUrl(filename)
        }catch(error){
            console.log(error.message)
        }
        setLoading(false)
    }
    useEffect(() =>{
        getFile()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() =>{
        if(url.length > 0){
            window.open(url)
        }
        setUrl('')
    }, [url]) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
            <PopoutMenu open={open} toggle={toggle}/>
            <Sidebar/>
            <Container>
                <HistoryContainer>
                    <HistoryBox>
                        <HistoryHeader>
                            <HistoryTitleWrapper>
                                <HistoryTitle>My Resume</HistoryTitle>
                            </HistoryTitleWrapper>
                            <HistoryButtonWrapper>
                                <UploadButton disabled={loading} onClick={toggle}>Upload Resume</UploadButton>
                            </HistoryButtonWrapper>
                        </HistoryHeader>
                        {data.length > 0 ?  
                        <ResumeContainer>
                                <TopTable>
                                    <TopName>File Name</TopName>
                                    <TopSetting>Setting</TopSetting>
                                </TopTable>
                                <ResumeTable>
                                    {data.map( data =>
                                    <Resume key={data.name}>
                                        <ResumeName>{data.name}</ResumeName>
                                        <ResumeSetting>
                                            <ResumeDownload>
                                                <DownloadLink onClick={e => handleUrl(data.name)} target='_blank'>
                                                    <Download/>
                                                </DownloadLink>
                                            </ResumeDownload>
                                            <ResumeDelete>
                                                <Trash disabled={loading} onClick={e => handleDelete(data.name)}/>
                                            </ResumeDelete>
                                        </ResumeSetting>
                                    </Resume>)}
                                </ResumeTable>
                        </ResumeContainer>
                        :
                        <NoDataContainer>
                            <IoIosSad size={'25px'}/>
                            <NoDataLabel>There is no data yet..</NoDataLabel>
                        </NoDataContainer>}
                    </HistoryBox>
                </HistoryContainer>
            </Container>
        </>
    )
}

export default MyResume