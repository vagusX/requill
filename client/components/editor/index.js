import React from 'react'
import ReactDOM from 'react-dom'
import Quill from 'quill'

import 'quill/dist/quill.snow.css'

export default class Editor extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const configs = {
      modules: {
        'toolbar': {
          container: '#toolbar'
        },
        'image-tooltip': true,
        'link-tooltip': true
      },
      theme: 'snow'
    }

    this.quill = new Quill('#editor', configs)
  }

  render() {
    return (
      <div className='editor-container'>
        <div id='toolbar' className='ql-toolbar'>
          <button className='ql-bold'>Bold</button>
          <button className='ql-italic'>Italic</button>
        </div>
        <div id='editor' className='ql-container'>hello editor@</div>
      </div>
    )
  }
}
