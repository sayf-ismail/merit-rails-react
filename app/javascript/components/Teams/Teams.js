import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Team from './Team'
import Home1 from '../Home/Home'
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
  
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Teams = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    //Get all of our teams from api
    //Update airlines in our state
    axios.get('/api/v1/teams')
    .then( res => {setTeams(res.data.data)})
    .catch( res => console.log(res))
  }, [teams.length])

  const grid = teams.map( item => {
    return (
      <Team 
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })

  return (
    <Fragment>
      <Home1 />
      <Home>
        <Header>
          <h1>Participating Teams</h1>
          <Subheader>They are under the influence of Appreciation.</Subheader>
        </Header>
          <Grid>
            {grid}
          </Grid>
      </Home>
    </Fragment>
  )
}

export default Teams