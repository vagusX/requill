import React from 'react'

export default class toolbar extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    configs: React.PropTypes.array
  }

  constructor(props) {
    super(props)
    this.renderSwitch = this.renderSwitch.bind(this)
    this.renderButton = this.renderButton.bind(this)
    this.renderSelect = this.renderSelect.bind(this)
    this.renderSeparator = this.renderSeparator.bind(this)
  }

  render() {
    return (
      <div id={this.props.id} className={`${this.props.className} ql-snow`}>
        {
          this.props.configs.map( (config, index) => this.renderSwitch(config, index) )
        }
        { this.props.children }
      </div>
    )
  }

  renderSwitch(config, index) {
    switch (config.type) {
      case 'select':
        return this.renderSelect(config, index)
      case 'button':
        return this.renderButton(config, index)
      default:
        return this.renderSeparator(config, index)
    }
  }

  renderButton(config, index) {
    return (
      <span key={parseInt(index) || config.label} className={`ql-format-button ql-${config.label}`}></span>
    )
  }

  renderSelect(config, index) {
    return (
      <select className={`ql-${config.label}`} key={parseInt(index) || config.label}>
        {
          config.options.map((option, index) => {
            return (
              <option key={parseInt(index) || option.value} value={option.value}>{option.name}</option>
            )
          })
        }
      </select>
    )
  }

  renderSeparator(config, index) {
    return (
      <span key={parseInt(index)} className='ql-format-separator'></span>
    )
  }
}
