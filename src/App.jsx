import React, { useState } from 'react'
import { Typography, Tag } from 'antd'
import {
  CheckCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import Fretboard from './Fretboard'
import 'antd/dist/antd.css'

const {
  Title, Paragraph,
} = Typography

function App() {
  const [loading, setLoading] = useState(false)
  let indicator = (
    <Tag icon={<CheckCircleOutlined />} color="success" style={{ marginLeft: '16px' }}>
      Ready to use!
    </Tag>
  )
  if (loading) {
    indicator = (
      <Tag icon={<SyncOutlined spin />} color="processing" style={{ marginLeft: '32px' }}>
        Configuring Mapping
      </Tag>
    )
  }
  const handleLoadingChange = (value) => {
    setLoading(value)
  }
  return (
    <div className="App" style={{ padding: '4px' }}>
      <Typography style={{ marginLeft: '16px', marginTop: '8px' }}>
        <Title>Guitar Input Mapper</Title>
        <Paragraph>*Click on a fret and press any key to set the input</Paragraph>
      </Typography>
      <Fretboard onLoadingChange={handleLoadingChange} />
      {indicator}
    </div>
  )
}

export default App
