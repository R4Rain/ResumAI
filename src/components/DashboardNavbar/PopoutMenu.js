import React, { useState } from 'react'
import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'
import { useStorage } from '../../contexts/StorageContext'

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 6969;
    transition: 0.2s ease-in-out opacity;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const Menu = styled.div`
    background-color: #fff;
    border-radius: 5px;
    width: 500px;
    height: 350px;
    padding: 10px 15px;
    @media screen and (max-width: 550px){
        width: 80%;
    }
`

const CloseIcon = styled.div`
    margin-top: 5px;
    margin-right: 5px;
    float: right;
    cursor: pointer;
`
const MenuForm = styled.form`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`

const MenuTitle = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    @media screen and (max-width: 550px){
        font-size: 22px;
    }
`
const MenuLabel = styled.p`
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 25px;
    @media screen and (max-width: 550px){
        font-size: 16px;
    }
`
const FileInput = styled.input`
    margin-bottom: 10px;
`

const MenuButtonContainer = styled.div`
    margin-top: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 350px){
        margin-top: 50px;
    }
`

const MenuButton = styled.button`
    padding: 2px 10px;
`

const MenuNotif = styled.p`
    color: ${({ danger }) => (danger ? '#F05454' : '#01BF71')};
    font-size: 15px;
    height: 30px;
`

const PopoutMenu = ({open, toggle}) => {
    const { uploadFile, progress, setProgress } = useStorage()
    const [error, setError] = useState('')
    const [file, setFile] = useState()
    const [loading, setLoading] = useState(false)

    const toggleFile = (e) =>{
        setFile(e.target.files[0])
    }
    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        setError('')
        setProgress(0)
        var parts = file.name.split('.')
        var extension = parts[parts.length-1]
        if(extension === 'pdf'){
            try{
                await uploadFile(file)
                setLoading(false)
            } catch (e) {
                console.log(e.message)
                setError(e.message)
                setLoading(false)
            }
        }
        else{
            setLoading(false)
            return setError('File format must be (.pdf)!')
        }
    }
    return (
        <>
            <Background isOpen={open}>
                <Menu>
                    <CloseIcon onClick={toggle}>
                         <AiOutlineClose size={20}/>
                    </CloseIcon>
                    <MenuForm onSubmit={handleSubmit} enctype="multipart/form-data">
                        <MenuTitle>File Submission</MenuTitle>
                        <MenuLabel>Select your resume for the analysis</MenuLabel>
                        <FileInput type='file' required onChange={toggleFile}/>
                        <progress value={progress} max="100"></progress>
                        {progress === 100 ? 
                        <MenuNotif danger={0}>File sucessfully uploaded!</MenuNotif>
                        : <MenuNotif danger={1}>{error}</MenuNotif>
                        }
                        <MenuButtonContainer>
                            <MenuButton disabled={loading} type='submit'>Submit</MenuButton>
                        </MenuButtonContainer>
                    </MenuForm>
                </Menu>
            </Background>
        </>
    )
}

export default PopoutMenu
