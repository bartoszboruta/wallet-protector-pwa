import React, { useContext } from 'react'
import Tesseract from 'tesseract.js'

import { FormContext } from 'containers/Form/Context'
import DrawField from 'components/DrawField'

const ImageRecognizer = () => {
  const { setCost } = useContext(FormContext)

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
