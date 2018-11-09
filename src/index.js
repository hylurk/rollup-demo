import './assets/scss/index.scss'

import { $ } from './util/tool'

const init = (opts) => {
  let wrapper = opts.wrapper || 'body'
  let text = opts.text || '这家伙真懒，啥也不传'
  let $el = document.createElement('div')
  $el.classList.add('rollup-demo')
  $el.innerHTML = text
  $(wrapper).appendChild($el)
}

export default {
  init
}