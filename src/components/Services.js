import React from 'react'
import styled from 'styled-components'

const ServicesContainer = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#02c473;

    @media screen and (max-width: 760px){
        height: 1400px;
    }

    @media screen and (max-width: 480px){
        height: 1600px;
    }
`

const ServicesWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 760px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`


const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

const ServicesIcon = styled.img`
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
`
const ServicesH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

const Services = ({ icon1 , icon2, icon4, icon3}) =>{
    return (
        <ServicesContainer id="services">
         <ServicesH1>Our Services</ServicesH1>
         <ServicesWrapper>
             <ServicesCard>
                 <ServicesIcon src={ icon2 }/>
                 <ServicesH2>Job recommendation</ServicesH2>
                 <ServicesP>We can help you to recommend a job based on your experiences and skills in your resume.</ServicesP>
             </ServicesCard>

             <ServicesCard>
                 <ServicesIcon src={ icon1 }/>
                 <ServicesH2>Resume storage</ServicesH2>
                 <ServicesP>We provide a cloud storage which you can easily access and download your resumes.</ServicesP>
             </ServicesCard>

             <ServicesCard>
                 <ServicesIcon src={ icon4 }/>
                 <ServicesH2>Get a detailed result</ServicesH2>
                 <ServicesP>We will analyze your resume and give the result of our recommendation based on your resume.</ServicesP>
             </ServicesCard>

             <ServicesCard>
                 <ServicesIcon src={ icon3 }/>
                 <ServicesH2>Access your account</ServicesH2>
                 <ServicesP>You can easily access your account by using your email address which we will properly secure it.</ServicesP>
             </ServicesCard>

         </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
