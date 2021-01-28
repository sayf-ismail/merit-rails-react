import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  margin: 0 20px 20px 0;
`
const Title = styled.div`
  padding: 20px 0 0 0;
  font-size: 18px;
`
const Points = styled.div``
const Message = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`
const Gif = styled.div`
  width: 120px
  text-align: center;
`

const Feedpost = (props) => {

  const { recipient_id, points, message, gif_url, user_id } = props.attributes

  const people = props.user
  let personIdObject = {}
  people.map((person) => {
    personIdObject[person.id] = person.attributes.name 
  })

  return (
    <Card>
      <div className="post-container">
        <Points>+{points}</Points>
      </div>
      <Title>
        From {personIdObject[user_id]} to {personIdObject[recipient_id]}
      </Title>
      <Message>{message}</Message>
      <Gif>
        <img src={gif_url} alt=""/>
      </Gif>
    </Card>
  )
}

export default Feedpost