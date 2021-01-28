import React from 'react'
import styled from 'styled-components'
import ktiga from '../../../assets/images/ktiga'

const Wrapper = styled.div`
  padding: 15px 10px 50px 0;
  font-size: 15px;
  font-family: sans-serif;
  text-align: center;

  img {
    display: inline-block;
    height: 80px;
    width: 80px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: -8px; 
  }

  h1 {
    display: inline-block;
  }

`

const TotalFeedposts = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`
const SmallText = styled.div`
  font-size: 12px;
  padding: 10px 0;
`

const Header = (props) => {
  const { name } = props.attributes
  // const total = props.users.length
  // const num_posts = props.feedposts.length

  return (
    <Wrapper>
      <img src={ktiga} alt=""/>
      <h1> {name} Wall</h1>
      <TotalFeedposts>
      </TotalFeedposts>
    </Wrapper>

  )
}

export default Header