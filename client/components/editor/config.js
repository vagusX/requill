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
  return { value: color }
})

const separator = { type: 'separator', label: 'separator' }

const bold      = { type: 'button', label: 'bold' }
const italic    = { type: 'button', label: 'italic' }
const strike    = { type: 'button', label: 'strike' }
const underline = { type: 'button', label: 'underline' }
const link      = { type: 'button', label: 'link' }
const image     = { type: 'button', label: 'image' }
const bullet    = { type: 'button', label: 'bullet' }
const list      = { type: 'button', label: 'list' }

const color      = { type: 'select', label: 'color', options: defaultColors }
const background = { type: 'select', label: 'background', options: defaultColors }

const align = { type: 'select', label: 'align',
  options: [
    { value:'justify' },
    { value:'center' },
    { value:'left' },
    { value:'right' }
  ]
}

const font = { type: 'select', label: 'font',
  options: [
    { name:'Sans Serif',  value:'sans-serif' },
    { name:'Serif',       value:'serif' },
    { name:'Monospace',   value:'monospace' }
  ]
}

const size = { type: 'select', label: 'size',
  options: [
    { name:'Small',   value:'14px' },
    { name:'Normal',  value:'16px' },
    { name:'Large',   value:'18px' },
    { name:'Huge',    value:'32px' }
  ]
}

const configs = [
  font      , separator,
  size      , separator,
  align     , separator,
  bold      , separator,
  italic    , separator,
  strike    , separator,
  underline , separator,
  link      , separator,
  image     , separator,
  bullet    , separator,
  list      , separator,
  color     , separator,
  background
]

export default configs
