import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import FeedpostForm from './FeedpostForm'
import Feedpost from './Feedpost'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #fff;
  }
`

const Main = styled.div`
  padding-left: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr) );
`

const Team = (props) => {
  const [team, setTeam] = useState({})
  const [user, setUser] = useState({})
  const [feedpost, setFeedpost] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const url = `/api/v1/teams/${props.match.params.name}`
    const url2 = `/api/v1/users`
    const url3 = `/api/v1/feedposts`

    // api/v1/teams/:name

    const requestOne = axios.get(url)
    const requestTwo = axios.get(url2)
    const requestThree = axios.get(url3)
    
    axios.all([requestOne, requestTwo, requestThree])
    .then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      const responseThree = responses[2]
      console.log(responseOne)
        setTeam(responseOne.data)
        setUser(responseTwo.data)
        setFeedpost(responseThree.data.data)
        setLoaded(true)
      })).catch(data => console.log('Error', data))
  }, [])

  //   axios.get(url)
  //   .then(res => {
  //     setTeam(res.data)
  //     setLoaded(true)
  //   })
  //   .catch(res => console.log(res))
  // }, [])

  var newPost = {}
  const handleChange = (e) => {
    setFeedpost(Object.assign({}, feedpost, {[e.target.name]: e.target.value}))
  }

  console.log('2nd', feedpost)

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    
    //submit the feedpost via API
    // const user_id = user.data.id
    const recipient_id = feedpost["recipient_id"]
    const points = feedpost["points"]
    const message = feedpost["message"]
    const user_id = 3
    const gif_url = 'https://steamuserimages-a.akamaihd.net/ugc/255965188116948531/1055F0B8522D9DDEDC67058CDA090B109D4C4137/'
    axios.post('/api/v1/feedposts', {recipient_id, points, message, user_id, gif_url})
      .then(resp => {
        console.log('RESPONSE', resp)
        setFeedpost({recipient_id: '', points: 0, message: ''})
      })
      .catch(resp => console.log(resp))
  }

  let feedposts
  if (loaded) {
    feedposts = feedpost.map((item, index) => {
      console.log('mapping', item)
      return (
        <Feedpost
          key={index}
          attributes={item.attributes}
          user={user.data}
        />
      )
    })
  }

  return (
    <Wrapper>
      { 
        loaded &&
        <Fragment>
          <Navbar />
          <Main>
            <Column>
              <Header
                attributes={team.data.attributes}
                users={team.included}
              />
              {feedposts}
          </Column>
          <Column>
            <FeedpostForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              feedpost={feedpost.data}
              user={user.data}
              newPost={newPost}
            />
            </Column>
          </Main>

        </Fragment>
      }
    </Wrapper>
  )
}

export default Team