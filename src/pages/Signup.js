import React, { useRef , useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
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

const Signup = () =>{
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const { signup, currentUser, errorMessage, setErrorMessage } = useAuth()
    const [error, setError] = useState('')
    const [warning, setWarning] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const closeError = (e) =>{
        if(setWarning){
            setWarning(false)
            setLoading(false)
        }
    }
    async function handleSubmit (e){
        e.preventDefault()
        setLoading(true)
        if(nameRef.length > 20){
            setError('Name length can not exceed 20 characters!')
            return setWarning(true)
        }
        if(passwordRef.current.value.length < 6){
            setError('Password length must more than 6 characters!')
            return setWarning(true)
        }
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            setError('Passwords do not match!')
            return setWarning(true)
        }
        await signup(emailRef.current.value, nameRef.current.value, passwordRef.current.value)
    }
    const clean_message = (txt) => {
        let temp = txt.split("/")[1]
        temp = temp.split("-")
        temp = temp.join(" ")
        temp = temp[0].toUpperCase() + temp.substring(1).toLowerCase()
        return temp
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
                            <FormH1>Sign Up</FormH1>
                            <FormInput type='text' ref={nameRef} placeholder='First & Last name' required></FormInput>
                            <FormInput type='email' ref={emailRef} placeholder='Email'required></FormInput>
                            <FormInput type='password' ref={passwordRef} required placeholder='Password'></FormInput>
                            <FormInput type='password' ref={passwordConfirmRef} required placeholder='Password confirmation'></FormInput>
                            <FormButtonWrapper>
                                <FormButton type='submit' disabled={loading} > Sign Up </FormButton>
                            </FormButtonWrapper>
                            <FormLink to='/login'>Already have an account?</FormLink>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signup

