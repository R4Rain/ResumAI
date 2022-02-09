import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CgDanger } from 'react-icons/cg'

export const Container = styled.div`
    min-height: 692px;
    height: 100%;
    background: #fff;
`
export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 400px){
        height: 80%;
    }
`

export const AlertContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const AlertWrapper = styled.div`
    background: ${({ danger }) => (danger ? '#F05454' : '#01bf71')};
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    color: #fff;
    position: fixed;
    top: ${({ error }) => (error ? '6.7%' : '-10%')};
    border-radius: 5px;
    width: max-content;
    padding: 5px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: 0.2s all ease-in-out;
    z-index: 15;
`

export const AlertText = styled.p`
    font-size: 18px;
    padding-left: 10px;
    text-align: center;

    @media screen and (max-width: 460px){
        font-size: 100%;
    }

`
export const AlertIcon = styled(CgDanger)`
    width: 20px;
    height: 20px;
    @media screen and (max-width: 460px){
        width: 8%;
        height: 8%;
    }
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #000000;
    font-weight: 700;
    font-size: 1.5rem;
    width: min-content;
    font-family: 'Aquire';
    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
    @media screen and (max-width: 320px){
        font-size: 100%;
    }
`
export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;
    @media screen and (max-width: 480px){
        padding: 10px;
    }
`
export const Form = styled.form`
    background: #fff;
    max-width: 400px;
    min-width: 200px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 40px 32px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #000000;
    font-size: 200%;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 320px){
        font-size: 100%;
    }
`
export const FormInput = styled.input`
    padding: 3% 3%;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: inset 5px 5px 15px #dbdbdb,
                inset -5px -5px 15px #ffffff;

    &:focus{
        outline: none;
    }
    ::-webkit-input-placeholder {   
        color: #a6a6a6;
    }

    :-ms-input-placeholder {
        color: #a6a6a6;
    }
    ::placeholder {
        color: #a6a6a6;
    }
`
export const FormButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FormButton = styled.button`
    background: #01bf71;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 3% 10%;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 100%;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover{
        background: #04de85;
    }
    :disabled{
        background: #029e5e;
    }
`
export const FormLink = styled(Link)`
    text-align:center;
    margin-top: 24px;
    color: #01bf71;
    font-size: 80%;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`