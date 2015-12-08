import React from 'react'

export default class toolbar extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    configs: React.PropTypes.array
  }

  constructor(props) {
    super(props)
    this.renderBtnGroup = this.renderBtnGroup.bind(this)
    this.renderSeparator = this.renderSeparator.bind(this)
    this.renderSelect = this.renderSelect.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log(this.props.configs[0].items[0].options[0])
  }

  render() {
    // console.log(this.props.configs)
    return (
      <div id={this.props.id} className={`${this.props.className} ql-snow`}>
        {
          this.props.configs.map( (config, index) => this.renderBtnGroup(config, index) )
        }
      </div>
    )
  }

  renderBtnGroup(config, index) {
    return (
      <span className='ql-format-group' key={index}>
        {
          config.items.map( (item, index) => this.renderSelect(item) )
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
              <option key={index || option.label} value={option.value}>{option.value}</option>
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
