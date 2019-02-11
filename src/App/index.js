import React, { Component } from 'react'
import './App.css'
import Welcome from './WelcomeMessage'
import styled,{css} from 'styled-components'
import AppLayout from './AppLayout'


class App extends Component {
  render() {
    return (
      <AppLayout>
        <Welcome/> 

      </AppLayout>

    )
  }
}

export default App;
