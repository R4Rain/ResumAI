import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Sidebar from '../components/DashboardNavbar/Sidebar'
import {FiLoader} from 'react-icons/fi'
import axios from 'axios'

const Container = styled.div`
    background-color: #e5e3e6;
    height: 100%;
    min-height: 100vh;
    padding: 30px;
`
const ResultContainer = styled.div`
    height: 100%;
`
const ResultBox = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.25);
    height: max-content;
`

const LoadingContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

const LoadingText = styled.p`
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
`

const ResultTitle = styled.h1`
    font-size: 125%;
    margin-bottom: 10px;
    @media screen and (max-width: 480px) {
        font-size: 100%;
        font-weight: 500;
    }
`
const ResultTableContainer = styled.div`
    height: 100%;
    width: 100%;
`
const ResultTable = styled.div`
    height: 55vh;
    max-height: 800px;
    width: 100%;
    overflow-y: overlay;
`
const TopResult = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    @media screen and (max-width: 480px) {
        font-size: 13px;
    }
`

const TopJob = styled.div`
    background-color: #13242e;
    padding: 10px 0px;
    width: 75%;
`
const TopScore = styled.div`
    background-color: #0c161c;
    width: 25%;
    padding: 10px 0px;
`
const ResultRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
 
    width: 100%;
    border-bottom: 0.1px solid #92A9BD;

    text-align: center;
    font-size: 1.1rem;
    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
    height: 50px;
`

const ResultJob = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 75%;
    font-size: 16px;
    font-weight: 400;
    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
    height: 100%;
    background: #f0f0f0;
`

const ResultScore = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 25%;
    font-size: 16px;
    font-weight: 600;
    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
    height: 100%;
    background-color: #dedede;
`
const Note = styled.p`
    margin-top: 5px;
    font-size: 120%;
    font-weight: bold;
    @media screen and (max-width: 480px) {
        font-size: 100%;
        font-weight: 500;
    }
`

const SkillContainer = styled.div`
    height: 100%;
    padding-top: 60px;
    margin-bottom: 30px;
`

const SkillBox = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.25);
    height: 250px;
`
const SkillBoxContainer = styled.div`
    height: 100%;
    width: 100%;
`

const SkillTitle = styled.h1`
    font-size: 125%;
    @media screen and (max-width: 480px) {
        font-size: 100%;
        font-weight: 500;
    }
    margin-bottom: 10px;
`

const SkillList = styled.div`
    padding: 10px 0px;
    height: fit-content;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 125px);
    grid-template-rows: repeat(auto-fit, 50px);
    overflow-y: overlay;
`

const Skill = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-color: #041562;
    color: #fff;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    &:nth-child(even) {
        background-color: #11468F;
    }
`

const Result = () => {
    const [display, setDisplay] = useState(false)
    const [result, setResult] = useState([])
    const [skill, setSkill] = useState([])
    useEffect(() =>{
        axios.get('/upload-file')
        .then(res =>{
            if(res.data.message === 'True'){
                console.log('data fetched!')
                const title = JSON.parse(res.data.title)
                const score = JSON.parse(res.data.score)
                const job_skill = JSON.parse(res.data.skill)

                const temp1 = title.map(function(element, index){
                    return [element, score[index]]
                })
                const temp2 = job_skill.map(function(element){
                    return element[0].toUpperCase() + element.substr(1)
                })
                setResult(temp1)
                setSkill(temp2)
                setDisplay(true)
            }
            else{
                console.log('no file yet')
                setDisplay(false)
            }
        })
        .catch(err =>{
            console.log('unable to fetch data', err.response.data.message)
        })
    }, [])

    return (
        <>
            <Sidebar/>
            <Container>
                <SkillContainer>
                    <SkillBox>
                        {display ?
                        <SkillBoxContainer>
                       
                            <SkillTitle>Based on our analysis, these are the skills that we discover!</SkillTitle>
                            <SkillList>
                                {skill.map((element, index) =>
                                    <Skill key={index}>{element}</Skill>
                                )}
                            </SkillList>
                        </SkillBoxContainer> : 
                        <LoadingContainer>
                            <FiLoader size={'30px'}/>
                            <LoadingText>Loading...</LoadingText>
                        </LoadingContainer>
                        }
                    </SkillBox>
                </SkillContainer>

                <ResultContainer>
                    <ResultBox>
                        {display ?
                        <ResultTableContainer>
                            <ResultTitle>
                                Here are jobs that we recommend to you!
                            </ResultTitle>
                            <TopResult>
                                <TopJob>Job Name</TopJob>
                                <TopScore>Score</TopScore>
                            </TopResult>
                            <ResultTable>
                                {result.map((element, index)=>
                                    <ResultRow key={index} index={index}>
                                        <ResultJob>{element[0]}</ResultJob>
                                        <ResultScore>{element[1]}</ResultScore>
                                    </ResultRow>
                                )}
                            </ResultTable>
                            <Note>Note: In this case, lesser score is more better...</Note>
                        </ResultTableContainer> :
                        <LoadingContainer>
                            <FiLoader size={'30px'}/>
                            <LoadingText>Loading...</LoadingText>
                        </LoadingContainer>
                        }
                    </ResultBox>
                </ResultContainer>
            </Container>
        </>
    )
}

export default Result
