import React from 'react'
import { Datepicker } from 'antd'

import Button from './components/button'
import Logo from './components/logo'

import 'antd/lib/index.css'

import './main.css'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Button tips='Hello seed' />
        <Logo slogan='React here!' />
        <Datepicker />
      </div>
    )
  }
}

export default App
