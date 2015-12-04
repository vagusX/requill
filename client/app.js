import React from 'react'

import Editor from './components/editor'

import styles from './main.css'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <Editor />
      </div>
    )
  }
}

export default App
