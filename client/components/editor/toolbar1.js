import React from 'react'
import { defaultItems, defaultColors } from './editor-config'

export default class Toolbar extends React.Component {
  static propTypes = {
    id:        React.PropTypes.string,
    className: React.PropTypes.string,
    items:     React.PropTypes.array
  }

  static defaultProps = {
    items: defaultItems
  }

  constructor(props) {
    super(props)
    this.renderSeparator = this.renderSeparator.bind(this)
    this.renderGroup = this.renderGroup.bind(this)
    this.renderChoiceItem = this.renderChoiceItem.bind(this)
    this.renderChoices = this.renderChoices.bind(this)
    this.renderAction = this.renderAction.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.renderItems = this.renderItems.bind(this)
  }

  renderSeparator(key) {
    return (
      <span key={key} className='ql-format-separator'></span>
    )
  }

  renderGroup(item, key) {
    return (
      <span key={item.label || key} className='ql-format-group'>
        item.items.map(this.renderItem)
      </span>
    )
  }

  renderChoiceItem(item, key) {
    return (
      <option value={item.value}>item.label</option>
    )
  }


  renderAction(item, key) {
    return (
      <span key={item.label || item.value || key} className={`ql-format-button ql-${item.type}`} title={item.label}>
        item.children
      </span>
    )
  }

  renderItem(item, key) {
    switch (item.type) {
      case 'separator':
        return this.renderSeparator(key)
      case 'group':
        return this.renderGroup(item, key)
      case 'font':
      case 'align':
      case 'size':
      case 'color':
      case 'background':
        return this.renderChoices(item, key)
      default:
        return this.renderAction(item, key)
    }
  }

  renderItems(items) {
    items.map( (item, index) => {
      this.renderItem(item, index)
    })
  }

  render() {
    const className = 'quill-toolbar ' + (this.props.className || '')
    return (
      <div className={className}></div>
    )
  }

  renderSeparator() {
    return (
      <span className='ql-format-separator'></span>
    )
  }

  renderSelect(item) {
    return (
      <select className={`ql-${item.label}`}>
        {
          item.options.map( option => {
            <option value={option.value}></option>
          })
        }
      </select>
    )
  }

  renderPicker(item) {
    let defaultLabel = item.options[0].label
    let defaultValue = item.options[0].value
    return (
      <span className={`ql-${item.label} ql-picker`}>
        <span className="ql-picker-label" data-value={defaultValue}>defaultLabel</span>
        <span className="ql-picker-options">
          {
            item.options.map( option => {
              <span data-value={option.value} className="ql-picker-item">
                {option.label}
              </span>
            })
          }
        </span>
      </span>
    )
  }

  renderLabel(item) {
    <span className={`${item.label}-picker`}>
      {
        this.renderPicker(item)
        this.renderSelect(item)
        this.renderSeparator()
      }
    </span>
  }
}


/*  item  */
// {
//   label:'font',
//   options: [
//     { label:'Sans Serif',  value:'sans-serif' },
//     { label:'Serif',       value:'serif' },
//     { label:'Monospace',   value:'monospace' }
//   ]
// }
