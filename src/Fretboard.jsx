import React, { useState, useEffect, useCallback } from 'react'
import {
  Row, Col, Divider, Button,
} from 'antd'

const style = {
  padding: '0px 0px', textAlign: 'center', width: '5em',
}

const Fretboard = (props) => {
  const startingSelections = []
  for (let index = 0; index < 6; index += 1) {
    startingSelections.push(Array.from(Array(13).keys()))
  }
  const [selections, setSelections] = useState(startingSelections)
  const [editing, setEditing] = useState(false)
  const [currentFret, setCurrentFret] = useState('E0')

  const handleChange = (event) => {
    const { value } = event.target
    if (value === undefined) {
      return
    }
    const str = value.charAt(0)
    const items = [...selections]
    switch (str) {
      case 'E':
        items[0][value.substring(1)] = '-'
        setSelections(items)
        break
      case 'A':
        items[1][value.substring(1)] = '-'
        setSelections(items)
        break
      case 'D':
        items[2][value.substring(1)] = '-'
        setSelections(items)
        break
      case 'G':
        items[3][value.substring(1)] = '-'
        setSelections(items)
        break
      case 'B':
        items[4][value.substring(1)] = '-'
        setSelections(items)
        break
      case 'e':
        items[5][value.substring(1)] = '-'
        setSelections(items)
        break
      default:
        // do nothing
    }
    setEditing(true)
    props.onLoadingChange(true)
    setCurrentFret(value)
  }

  const handleKeyDown = useCallback((event) => {
    const { key, keyCode } = event
    if (editing === true) {
      const str = currentFret.charAt(0)
      const items = [...selections]
      switch (str) {
        case 'E':
          items[0][currentFret.substring(1)] = key
          setSelections(items)
          break
        case 'A':
          items[1][currentFret.substring(1)] = key
          setSelections(items)
          break
        case 'D':
          items[2][currentFret.substring(1)] = key
          setSelections(items)
          break
        case 'G':
          items[3][currentFret.substring(1)] = key
          setSelections(items)
          break
        case 'B':
          items[4][currentFret.substring(1)] = key
          setSelections(items)
          break
        case 'e':
          items[5][currentFret.substring(1)] = key
          setSelections(items)
          break
        default:
          // do nothing
      }
      setEditing(false)
      setCurrentFret('E0')
      props.onLoadingChange(false)
    }
  }, [editing, currentFret])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div>
      <Divider orientation="left">Fretboard</Divider>
      <Row justify="space-around" style={{ marginBottom: '8px' }}>
        <Col><div style={{ padding: '8px 4px', fontWeight: 'bolder', width: '1em' }}>E</div></Col>
        {selections[0]
          .map((value, index) => (
            <Col>
              <Button
                style={style}
                value={`E${index}`}
                onClick={handleChange}
              >
                {value}
              </Button>
            </Col>
          ))}
      </Row>
      <Row justify="space-around" style={{ marginBottom: '8px' }}>
        <Col><div style={{ padding: '8px 4px', fontWeight: 'bolder', width: '1em' }}>A</div></Col>
        {selections[1]
          .map((value, index) => (
            <Col>
              <Button
                style={style}
                value={`A${index}`}
                onClick={handleChange}
              >
                {value}
              </Button>
            </Col>
          ))}
      </Row>
      <Row justify="space-around" style={{ marginBottom: '8px' }}>
        <Col><div style={{ padding: '8px 4px', fontWeight: 'bolder', width: '1em' }}>D</div></Col>
        {selections[2]
          .map((value, index) => (
            <Col>
              <Button
                style={style}
                value={`D${index}`}
                onClick={handleChange}
              >
                {value}
              </Button>
            </Col>
          ))}
      </Row>
      <Row justify="space-around" style={{ marginBottom: '8px' }}>
        <Col><div style={{ padding: '8px 4px', fontWeight: 'bolder', width: '1em' }}>G</div></Col>
        {selections[3]
          .map((value, index) => (
            <Col>
              <Button
                style={style}
                value={`G${index}`}
                onClick={handleChange}
              >
                {value}
              </Button>
            </Col>
          ))}
      </Row>
      <Row justify="space-around" style={{ marginBottom: '8px' }}>
        <Col><div style={{ padding: '8px 4px', fontWeight: 'bolder', width: '1em' }}>B</div></Col>
        {selections[4]
          .map((value, index) => (
            <Col>
              <Button
                style={style}
                value={`B${index}`}
                onClick={handleChange}
              >
                {value}
              </Button>
            </Col>
          ))}
      </Row>
      <Row justify="space-around" style={{ marginBottom: '8px' }}>
        <Col><div style={{ padding: '8px 4px', fontWeight: 'bolder', width: '1em' }}>e</div></Col>
        {selections[5]
          .map((value, index) => (
            <Col>
              <Button
                style={style}
                value={`e${index}`}
                onClick={handleChange}
              >
                {value}
              </Button>
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default Fretboard
