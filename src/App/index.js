import React, { Component } from 'react'
import './App.css'
import Welcome from './WelcomeMessage'
import styled,{css} from 'styled-components'

const MyButton = styled.div`
  color: green;
  ${props => props.primary && css`
    color: palevioletred;
  `}
`
class App extends Component {
  render() {
    return (
      <div>
        <Welcome/> 
        <MyButton>Hello</MyButton>
        <MyButton primary>Hello</MyButton>
      </div>

    )
  }
}

export default App;
