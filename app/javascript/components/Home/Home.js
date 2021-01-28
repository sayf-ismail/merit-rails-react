import React, { Component } from 'react'
import Jumbotron from '../Teams/Jumbotron'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      lesson_modules: [
        { id: 1, title: '1. Setting up a new Team', description: 'lorem ipsum', active: false },
        { id: 2, title: '2. Adding your team to the Group', description: 'lorem ipsum', active: false },
        { id: 3, title: '3. Making your first Post!', description: 'lorem ipsum', active: false },
        { id: 4, title: '4. Sharing the rewards...', description: 'lorem ipsum', active: false }
      ]
    }
  }

  render() {
    return(
      <div>
        <Jumbotron/>
      </div>
    )
  }
}

export default Home