import '../css/index.css'

import text from './text'


text()

// si cambia  lo ejecute
if (module.hot) {
  module.hot.accept('./text.js', function() {
    console.log('he recargado en caliente')
    text()
  })
}