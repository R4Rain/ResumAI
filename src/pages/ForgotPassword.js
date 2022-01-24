import React, { useRef , useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
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

const ForgotPassword = () =>{
    const emailRef = useRef()

    const { resetPassword, errorMessage, setErrorMessage } = useAuth()
    const [error, setError] = useState('')
    const [warning, setWarning] = useState(false)

    const [reminder, setReminder] = useState(false)
    const [loading, setLoading] = useState(false)
    const closeError = (e) =>{
        setReminder(false)
        setWarning(false)
        setLoading(false)
    }

    async function handleSubmit (e){
        e.preventDefault()
        setReminder(false)
        setWarning(false)
        setLoading(true)
        await resetPassword(emailRef.current.value)
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
            if(errorMessage === 'Confirmed!'){
                setReminder(true)
            }
            else{
                setError(clean_message(errorMessage))
                setWarning(true)
                setErrorMessage('')
            }
        }
    }, [errorMessage]) // eslint-disable-line react-hooks/exhaustive-deps
    return(
    <>
        <Container onClick={ closeError }>
            <AlertContainer>
                <AlertWrapper danger={ true } error={ warning }>
                    <AlertIcon/>
                    <AlertText>{ error }</AlertText>
                </AlertWrapper>
                <AlertWrapper danger={ false } error={ reminder }>
                    <AlertIcon/>
                    <AlertText>Check your email for password reset</AlertText>
                </AlertWrapper>
            </AlertContainer>
            <FormWrap>
                <Icon to='/'>ResumAI</Icon>
                <FormContent>
                    <Form onSubmit={handleSubmit}>
                        <FormH1>Reset Password</FormH1>
                        <FormInput type='email' ref={emailRef} placeholder='Email'required></FormInput>
                        <FormButtonWrapper>
                            <FormButton type='submit' disabled={loading} > Submit </FormButton>
                        </FormButtonWrapper>
                        <FormLink to='/login'>Ready to log in?</FormLink>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
    )
}

export default ForgotPassword

