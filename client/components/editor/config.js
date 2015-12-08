const colorsArray = [
  'rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
  'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
  'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
  'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
  'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
  'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
  'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
  'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
  'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
  'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
  'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
  'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)',
]

const defaultColors = colorsArray.map( color => {
  return { label: '', value: color }
})

const blocks = {
  tag: 'blocks',
  items: [
    { type: 'bullet', label: 'Bullet' },
    { type: 'separator' },
    { type: 'list', label: 'List' }
  ]
}

const text = {
  tag: 'text',
  items: [
    { type: 'bold', label: 'Bold' },
    { type: 'separator' },
    { type: 'italic', label: 'Italic' },
    { type: 'separator' },
    { type: 'strike', label: 'Strike' },
    { type: 'separator' },
    { type: 'underline', label: 'Underline' },
    { type: 'separator' },
    { type: 'link', label: 'Link' },
    { type: 'separator' },
    { type: 'image', label: 'Image' }
  ]
}

const colors = {
  tag: 'colors',
  items: [
    {
      type: 'color', // content of `option` tag is empty
      options: defaultColors
    },
    { type: 'separator' },
    {
      type: 'background', // content of `option` tag is empty
      options: defaultColors
    }
  ]
}

const align = {
  label: 'align',
  type: 'select',
  options: [
    { value:'justify' },
    { value:'center' },
    { value:'left' },
    { value:'right' }
  ]
}

const font = {
  label: 'font',
  type: 'select',
  options: [
    { label:'Sans Serif',  value:'sans-serif' },
    { label:'Serif',       value:'serif' },
    { label:'Monospace',   value:'monospace' }
  ]
}

const size = {
  label: 'size',
  type: 'select',
  options: [
    { label:'Small', value:'14px' },
    { label:'Normal',  value:'16px' },
    { label:'Large',  value:'18px' },
    { label:'Huge',    value:'32px' }
  ]
}

const formats = {
  tag: 'formats',
  items: [
    {
      type:'align', // content of `option` tag is empty
      options: [
        { label:'', value:'justify' },
        { label:'',  value:'center' },
        { label:'',    value:'left' },
        { label:'',   value:'right' }
      ]
    },
    { type: 'separator' },
    {
      type:'font',
      options: [
        { label:'Sans Serif',  value:'sans-serif' },
        { label:'Serif',       value:'serif' },
        { label:'Monospace',   value:'monospace' }
      ]
    },
    { type: 'separator' },
    {
      type:'size',
      options: [
        { label:'Small', value:'14px' },
        { label:'Normal',  value:'16px' },
        { label:'Large',  value:'18px' },
        { label:'Huge',    value:'32px' }
      ]
    }
  ]
}

const configs = [
  text,
  colors,
  blocks,
  formats
]

export default configs
