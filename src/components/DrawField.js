import React, { useEffect, useRef, useState } from 'react'
import propTypes from 'prop-types'

const DrawField = ({
  strokeStyle = '#c75353',
  lineJoin = 'round',
  lineWidth = 5,
  onDrawEnd = () => {},
  onCancel = () => {},
}) => {
  const _canvas = useRef(null)
  const [paintMode, setPaintMode] = useState(false)
  const [canvasWidth, setCanvasWidth] = useState(300)
  const [canvasHeight, setCanvasHeight] = useState(400)

  useEffect(() => {
    window.addEventListener('resize', _resize)
    _resize()
  }, [])

  let pointsX = []
  let pointsY = []
  let clickDrag = []

  const _resize = () => {
    const width = _canvas.current.parentNode.clientWidth
    setCanvasWidth(width)
    setCanvasHeight(width < 320 ? width : 320)
  }

  const _handleCancel = () => {
    setPaintMode(true)
  }

  const _handleMove = e => {
    if (!paintMode) {
      return
    }
    const x = e.pageX - _canvas.current.offsetLeft
    const y = e.pageY - _canvas.current.offsetTop
    const dragging = true

    _addPoint({ dragging, x, y })
    _redraw()
  }

  const _handleUp = () => {
    setPaintMode(false)
    onDrawEnd(_canvas.current.getContext('2d'))
  }

  const _addPoint = ({ dragging, x, y }) => {
    pointsX.push(x)
    pointsY.push(y)
    clickDrag.push(dragging)
  }

  const _redraw = () => {
    const context = _canvas.current.getContext('2d')
    context.strokeStyle = strokeStyle
    context.lineJoin = lineJoin
    context.lineWidth = lineWidth

    for (let i = 0; i < pointsX.length; i++) {
      context.beginPath()
      if (clickDrag[i] && i) {
        context.moveTo(pointsX[i - 1], pointsY[i - 1])
      } else {
        context.moveTo(pointsX[i] - 1, pointsY[i])
      }
      context.lineTo(pointsX[i], pointsY[i])
      context.closePath()
      context.stroke()
    }
  }

  const _clearCanvas = () => {
    const context = _canvas.current.getContext('2d')

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    onCancel()
  }

  return (
    <div className="drawfield">
      <canvas
        data-paper-resize={true}
        height={canvasHeight}
        onMouseDown={_handleCancel}
        onMouseMove={_handleMove}
        onMouseUp={_handleUp}
        onTouchCancel={_handleCancel}
        onTouchMove={_handleMove}
        onTouchStart={_handleUp}
        ref={_canvas}
        width={canvasWidth}
      />
      <button className="btn" onClick={_clearCanvas}>
        Clear
      </button>
    </div>
  )
}

DrawField.propTypes = {
  strokeStyle: propTypes.string,
  lineJoin: propTypes.string,
  lineWidth: propTypes.number,
  onDrawEnd: propTypes.func,
  onCancel: propTypes.func,
}

export default DrawField
