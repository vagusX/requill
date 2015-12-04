import React from 'react'

import Editor from './components/editor'

import './main.css'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Editor />
      </div>
    )
  }
}

export default App
