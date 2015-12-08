import React from 'react'

export default class toolbar extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    configs: React.PropTypes.array
  }

  constructor(props) {
    super(props)
    this.renderGroup = this.renderGroup.bind(this)
    this.renderSeparator = this.renderSeparator.bind(this)
    this.renderSelect = this.renderSelect.bind(this)
    this.renderSwitch = this.renderSwitch.bind(this)
    this.renderButton = this.renderButton.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log(this.props.configs[0].items[0].options[0])
  }

  render() {
    return (
      <div id={this.props.id} className={`${this.props.className} ql-snow`}>
        {
          this.props.configs.map( (config, index) => this.renderSwitch(config, index) )
        }
      </div>
    )
  }

  renderSwitch(config, index) {
    switch (config.tag) {
      case 'text':
        return this.renderButton(config, index)
      case 'blocks':
        return this.renderButton(config, index)
      default:
        return this.renderGroup(config, index)
    }
  }

  renderButton(config, index) {
    return (
      <span className='ql-format-group' key={index || config.tag}>
        {
          config.items.map( (item, index) => {
            if (item.type !== 'separator') {
              return (
                <span key={index || item.label} className={`ql-format-button ql-${item.type}`}></span>
              )
            } else {
              return this.renderSeparator()
            }
          })
        }
      </span>
    )
  }

  renderGroup(config, index) {
    return (
      <span className='ql-format-group' key={index || config.tag}>
        {
          config.items.map( (item, index) => {
            if (item.type !== 'separator') {
              return this.renderSelect(item)
            } else {
              return this.renderSeparator()
            }
          })
        }
      </span>
    )
  }

  renderSelect(item, index) {
    return (
      <select className={`ql-${item.type}`} key={index || item.type}>
        {
          item.options.map((option, index) => {
            return (
              <option key={index} value={option.value}>{option.label}</option>
            )
          })
        }
      </select>
    )
  }

  renderSeparator() {
    return (
      <span className='ql-format-separator'></span>
    )
  }
}
