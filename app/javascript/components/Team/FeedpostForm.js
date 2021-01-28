import React from 'react'
import styled from 'styled-components'


const Field = styled.div`
  border-radius: 4px;

  input{
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0 0 0;
    padding: 12px;
    width: 80%;
  }

  textarea {
    width: 80%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`

const Wrapper = styled.div`
  text-align: center;
  font-family: sans-serif;
  padding: 20px;
  background: #000;
  color: #fff;
  height: 100vh;
  padding-top: 40px;
`

const SubmitBtn = styled.div`
  text-align: center;
  color: #fff;
  background: #333;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: #fff;
    color: #333;
    border: 1px solid #fff;
  }
`
const Headline = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`

const FeedpostForm = (props) => {
  
  const people = props.user
  let listOfNames = ["Select One..."] 
  let personIdObject = {}

  people.map((person) => {
    personIdObject[person.attributes.name] = person.id 
    listOfNames.push(person.attributes.name)
  })
  
  // filter list to make sure names are unique
  var uniqueList = listOfNames.filter((value, index, self) => {
    return self.indexOf(value) === index;
  })


  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>Have a peer you want to reward and recognise? Share your thanks!</Headline>
        <Field>
          <label htmlFor="recipient_id">Choose a colleague/team member:
            <select onChange={props.handleChange} name="recipient_id" id="recipient_id">
              {uniqueList.map( item => { return (<option value={personIdObject[item]}>{item}</option>)} )}
            </select>
          </label>
        </Field>
        <Field>
          <input onChange={props.handleChange} type="number" name="points" placeholder="Points to Give..." value={props.newPost.points}/>
        </Field>
        <Field>
          <textarea onChange={props.handleChange} name="message" id="" cols="30" rows="10" placeholder="Your Message Here..." value={props.newPost.message}></textarea>
        </Field>
        <SubmitBtn>Post Your Thanks</SubmitBtn>
      </form>
    </Wrapper>
  )
}

export default FeedpostForm