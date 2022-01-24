import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Container = styled.footer`
    background-color: #fff;
    box-shadow: 0px -6px 10px 0px rgba(0,0,0,0.2);
`

const Wrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`
const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin-top: 40px;
    margin-left: 50px;
    @media screen and (max-width: 820px){
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
    }
`

const Logo = styled(Link)`
    color: #000000;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-family: 'Aquire';
`

const WebsiteRights = styled.small`
    color: #000000;
    margin-bottom: 16px;
`

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

const ScLink = styled.a`
    color: #000000;
    font-size: 24px;
`

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <Logo to='/'>
                            ResumAI
                        </Logo>

                        <WebsiteRights>ResumAI 	&copy; 2021 All rights reserved.</WebsiteRights>

                        <Icons>
                            <ScLink href='https://www.facebook.com' target='_blank' aria-label="Facebook">
                                <FaFacebook/>
                            </ScLink>

                            <ScLink href='https://www.instagram.com' target='_blank' aria-label="Instagram">
                                <FaInstagram/>
                            </ScLink>

                            <ScLink href='https://www.youtube.com' target='_blank' aria-label="Youtube">
                                <FaYoutube/>
                            </ScLink>

                            <ScLink href='https://www.twitter.com' target='_blank' aria-label="Twitter">
                                <FaTwitter/>
                            </ScLink>

                            <ScLink href='https://www.linkedin.com' target='_blank' aria-label="Linkedin">
                                <FaLinkedin/>
                            </ScLink>
                        </Icons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </Wrapper>
        </Container>
    )
}

export default Footer
