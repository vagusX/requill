import React from 'react'

import styles from './button.css'

class Button extends React.Component {
  static propTypes = {
    tips: React.PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
  }

  handleClick(e) {
    e.preventDefault
    console.log('OMG ┌(ಠ_ಠ)┘')
  }

  render() {
    return (
      <div className={styles.button} onClick={this.handleClick}>
        {this.props.tips}
      </div>
    )
  }
}

export default Button
