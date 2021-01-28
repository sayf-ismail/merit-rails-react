import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import ktiga from '../../../assets/images/ktiga'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff
`
const TeamLogo = styled.div`
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`
const TeamName = styled.div`
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  width: 100%;

  a {
    text-align: center;
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`

const Team = (props) => {
  return (
    <Card>
      <TeamLogo>
        <img src={ktiga}/>
      </TeamLogo>
      <TeamName>{props.attributes.name}</TeamName>
      <LinkWrapper>
        <Link to={`/teams/${props.attributes.name}`}>View Team</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Team