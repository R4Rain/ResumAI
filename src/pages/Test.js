import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #e5e3e6;
    height: 100%;
`
const SkillContainer = styled.div`
    height: 100vh;
    padding: 30px;
    padding-top: 80px;
`

const SkillBox = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.25);
    height: 250px;
`
const SkillTitle = styled.h1`
    font-size: 125%;
    height: 20%;
`

const SkillList = styled.div`
    height: 80%;
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



const Test = () => {
  return (
        <>
            <Container>
                <SkillContainer>
                    <SkillBox>
                        <SkillTitle>Based on our analysis, these are the skills that we discover!</SkillTitle>
                        <SkillList>
                            <Skill>
                                Software
                            </Skill>
                            <Skill>
                                Software
                            </Skill>
                        </SkillList>
                    </SkillBox>
                </SkillContainer>
            </Container>
        </>
  )
}

export default Test;
