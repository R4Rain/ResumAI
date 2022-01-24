import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#01BF71')};
    
    @media screen and (max-width: 760px){
        padding: 100px 0;
    }
`

const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    /* column-gap: 2rem; */
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 760px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col1;
    @media screen and (max-width: 760px){
        padding: 0px;
    }
`

const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

const TopLine = styled.p`
    color: #000000;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

const Heading = styled.h1`
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 700;
    
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#000000')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#000000' : '#fff')};
`

const BtnWrap = styled.div`
    display: flex;
`
const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    transition: 0.2s all ease;
    &:hover{
        transform: scale(1.02);
    }
`

const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

const Button = styled(Link)`
    border-radius: 10px;
    background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    z-index: 5;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#04de85' : '#292929')};
    }
`

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, svg}) => {
    return (
            <InfoContainer lightBg={ lightBg } id={ id }>
                <InfoWrapper>
                    <InfoRow imgStart={ imgStart }>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{ topLine }</TopLine>
                                <Heading lightText={lightText}>{ headline }</Heading>
                                <Subtitle darkText={darkText}>{ description }</Subtitle>

                                <BtnWrap>
                                    <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact={1}
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}

                                    >{ buttonLabel }</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={ svg } alt = { alt } />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
    )
}

export default InfoSection
