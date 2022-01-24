import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Sidebar from '../components/DashboardNavbar/Sidebar'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    background-color: #e5e3e6;
    height: 100%;
`
const SubmitContainer = styled.div`
    height: 100vh;

    padding: 30px;
    padding-top: 80px;
`
const SubmitBox = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.25);
    height: 77vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SubmitTitle = styled.h1`
    font-size: 36px;
    margin: 20px 0px;

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`

const SubmitForm = styled.form`
    margin: 20px 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const FileInput = styled.input`

`

const SubmitError = styled.p`
    margin-top: 10px;
    height: 30px;
    font-size: 16px;
    color: #F05454;
    text-align: center;
`
const SubmitButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

const SubmitButton = styled.button`
    padding: 0px 25px;
`

const UploadResume = () =>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [file, setFile] = useState()
    const navigate = useNavigate()
    const toggleFile = (e) =>{
        setFile(e.target.files[0])
    }
    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        var parts = file.name.split('.')
        var extension = parts[parts.length-1]
        if(extension === 'pdf'){
            const formData = new FormData()
            formData.append("file", file)

            axios.post("/upload-file", formData, {headers: {'Content-Type': 'multipart/form-data'}})
                .then(res => {
                    console.log(res)
                    setLoading(false)
                    navigate('/dashboard/result')
                })
                .catch(err => {
                    console.warn(err)
                    setLoading(false)
                })
        }
        else{
            setLoading(false)
            return setError('File format must be (.pdf)!')
        }
    }
    return (
        <>
            <Sidebar/>
            <Container>
                <SubmitContainer>
                    <SubmitBox>
                        <SubmitTitle>
                            Upload your Resume
                        </SubmitTitle>
                        <SubmitForm onSubmit={handleSubmit} enctype="multipart/form-data">
                            <FileInput required disabled={loading} type={'file'} onChange={toggleFile}></FileInput>
                            <SubmitButtonContainer>
                                <SubmitButton disabled={loading} type='submit'>Submit</SubmitButton>
                            </SubmitButtonContainer>
                            <SubmitError>{error}</SubmitError>
                        </SubmitForm>
                    </SubmitBox>
                </SubmitContainer>
            </Container>
        </>
    )
}

export default UploadResume
