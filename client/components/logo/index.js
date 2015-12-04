import React from 'react'

import styles from './logo.css'

class Logo extends React.Component {
  static propTypes = {
    slogan: React.PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className={styles.logo}></div>
        <div className={styles.slogan}>{this.props.slogan}</div>
        <button className="btn btn-primary">123ß</button>
        <span className="glyphicon glyphicon-ok"></span>
      </div>
    )
  }
}

export default Logo
