import React from 'react'
import ReactDOM from 'react-dom'
import Quill from 'quill'
import Toolbar from './toolbar'
import configs from './config'

import 'quill/dist/quill.snow.css'

import styles from './editor.css'

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
    this.deleteBlank = this.deleteBlank.bind(this)
    this.handlePaste = this.handlePaste.bind(this)
    this.logHTML = this.logHTML.bind(this)
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

    this.editorEL = ReactDOM.findDOMNode(this.refs.editor)
    this.editorEL.addEventListener('paste', this.handlePaste, false)
  }

  componentWillUnmount() {
    this.editorEL.removeEventListener('paste', this.handlePaste, false)
    this.destroy()
  }

  render() {
    return (
      <div className='ql-container'>
        <div className={styles.custom}>
          <button onClick={this.handleClick}>Get Selection</button>
          <button onClick={this.destroy}>destroy</button>
          <button onClick={this.custom}>custom</button>
          <button onClick={this.logHTML}>getHTML</button>
          <button>{this.state.counter}</button>
          <button id='counter'>0</button>
        </div>
        <Toolbar id='toolbar' className={`${styles.toolbar} ql-toolbar`} configs={configs}>
          <button onClick={this.deleteBlank}>去空格</button>
        </Toolbar>
        <div ref='editor' id='editor' className='ql-container'>我是一个文本编辑器</div>
      </div>
    )
  }

  logHTML() {
    const html = this.editor.getHTML()
    console.log(html)
  }

  handlePaste(e) {
    const items = e.clipboardData.items
    const range = this.getRange()
    for (let i = 0; i < items.length; ++i) {
      if (items[i].kind === 'file' && items[i].type.indexOf('image/') !== -1 ) {
        let blob = items[i].getAsFile()
        let blobUrl = window.URL.createObjectURL(blob)
        this.editor.insertEmbed(range.start, 'image', blobUrl)
      }
    }
    return false
  }

  deleteBlank() {
    this.editor.focus()
    const html = this.editor.getHTML()
    const newHtml = html.replace(/\<div\>\<br\>\<\/div\>/g, '').replace(/\s/g, '')
    this.editor.setHTML(newHtml)
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
    return range
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
