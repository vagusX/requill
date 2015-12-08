import React from 'react'
import ReactDOM from 'react-dom'
import Quill from 'quill'
import Toolbar from './toolbar'
import configs from './config'

import 'quill/dist/quill.snow.css'

export default class Editor extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.getRange = this.getRange.bind(this)
    this.counter = this.counter.bind(this)
    this.destroy = this.destroy.bind(this)
    this.custom = this.custom.bind(this)
  }

  componentDidMount() {
    const configs = {
      formats: [
        'bold', 'italic', 'strike',
        'underline', 'font', 'size',
        'color', 'background', 'image',
        'link', 'bullet', 'list', 'align'
      ],
      modules: {
        'toolbar': {
          container: '#toolbar'
        },
        'image-tooltip': true,
        'link-tooltip': true
      },
      theme: 'snow'
    }

    this.editor = new Quill('#editor', configs)
    this.editor.focus()
    this.editor.on('text-change', this.counter)
    this.editor.addModule('counter', {
      container: '#counter'
    })
  }

  componentWillUnmount() {
    this.destroy()
  }

  render() {
    return (
      <div className='ql-container'>
        <div>
          <button onClick={this.handleClick}>Get Selection</button>
          <button onClick={this.destroy}>destroy</button>
          <button onClick={this.custom}>custom</button>
          <button>{this.state.counter}</button>
          <button id='counter'>0</button>
        </div>
        <Toolbar id='toolbar' className='ql-toolbar' configs={configs} />
        <div id='editor' className='ql-container'>12345123999123321123</div>
      </div>
    )
  }

  custom() {
    this.editor.focus()
    const range = this.editor.getSelection()
    const text = this.editor.getText()
    if (text.indexOf('123') !== -1) {
      const newText = text.replace(/123/g, 'found')
      this.editor.setText(newText)
    }
    this.editor.setSelection(range)
  }

  destroy() {
    this.editor.destroy()
  }

  counter() {
    const length = this.editor.getLength()
    this.setState({
      counter: length - 1
    })
  }

  handleClick() {
   this.getRange()
  }

  getRange() {
    this.editor.focus()
    let range = this.editor.getSelection()
    console.log(range)
  }
}

class Counter {
  constructor(quill, opts) {
    this.quill = quill
    this.opts = opts
    this.container = document.querySelector(opts.container)
    quill.on('text-change', this.counter.bind(this))
  }

  counter() {
    const text = this.quill.getText()
    this.container.innerHTML = text.length - 1
  }
}

Quill.registerModule('counter', Counter)
