import React, { useContext } from 'react'
import Tesseract from 'tesseract.js'

import { MainContext } from 'containers/Main/Context'
import DrawField from 'components/DrawField'

const ImageRecognizer = () => {
  const { setCost } = useContext(MainContext)

  const _handleDrawEnd = image => {
    Tesseract.recognize(image, {
      classify_bln_numeric_mode: true,
      tessedit_char_whitelist: '0123456789,.',
    })
      .progress(message => console.info(message))
      .catch(err => console.error(err))
      .then(result => setCost(parseFloat(result.text)))
  }

  return <DrawField onCancel={() => setCost(0)} onDrawEnd={_handleDrawEnd} />
}

export default ImageRecognizer
