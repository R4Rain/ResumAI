import React, { useRef , useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from "react-router-dom"
import { Container,
    AlertContainer,
    AlertWrapper,
    AlertIcon,
    AlertText,
    FormWrap,
    Icon,
    Form,
    FormContent,
    FormH1,
    FormInput,
    FormButtonWrapper,
    FormButton,
    FormLink
} from '../components/FormComponent'

const Login = () =>{
    const emailRef = useRef()
    const passwordRef = useRef()

    const { login, errorMessage, setErrorMessage, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [warning, setWarning] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const closeError = (e) =>{
        setLoading(false)
        setWarning(false)
    }
    async function handleSubmit (e){
        e.preventDefault()
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
    }
    const clean_message = (txt) => {
        try{
            let temp = txt
            temp = temp.split("/")[1]
            temp = temp.split("-")
            temp = temp.join(" ")
            temp = temp[0].toUpperCase() + temp.substring(1).toLowerCase()
            return temp
        }catch{
            return txt
        }
    }
    useEffect(() => {
        if(errorMessage){
            setError(clean_message(errorMessage))
            setWarning(true)
            setErrorMessage('')
        }
        else if(currentUser){
            setWarning(false)
            setLoading(false)
            navigate('/dashboard')
        }
    }, [errorMessage, setErrorMessage, currentUser, navigate])

    return(
    <>
        <Container onClick={ closeError }>
            <AlertContainer>
                <AlertWrapper danger={ true } error={ warning }>
                    <AlertIcon/>
                    <AlertText>{ error }</AlertText>
                </AlertWrapper>
            </AlertContainer>
            <FormWrap>
                <Icon to='/'>ResumAI</Icon>
                <FormContent>
                    <Form onSubmit={handleSubmit}>
                        <FormH1>Log In</FormH1>
                        <FormInput type='email' ref={emailRef} placeholder='Email'required></FormInput>
                        <FormInput type='password' ref={passwordRef} required placeholder='Password'></FormInput>
                        <FormButtonWrapper>
                            <FormButton type='submit' disabled={loading} > Log In </FormButton>
                        </FormButtonWrapper>
                        <FormLink to='/forgot-password'>Forgot your password?</FormLink>
                        <FormLink to='/signup'>Don't have an account yet?</FormLink>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
    )
}

export default Login

