import { Component, useState } from 'react'
import { Input, Tooltip, Row, Col, Button, Tree } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { DownloadOutlined, ClearOutlined } from '@ant-design/icons'

import randomNationId from '../../../libraries/randomNationId'

const { Search } = Input

const MultiRandom = () => {
  const initState = {
    value: '',
    array: [],
    times: 0,
  }

  const [state, setState] = useState(initState)

  const handleOnChange = e => {
    const { value } = e.target
    console.log(value)
    const reg = /^-?[0-9]*(\.[0-9]*)?$/
    if (!isNaN(value) && reg.test(value) && parseInt(value) < 201) {
      setState({ ...state, value: value * 1 })
    } else if (value == '') {
      setState({ ...state, value: 0 })
    } else if (value > 200) {
      setState({ ...state, value: 200 })
    }
  }

  const handleOnSearch = value => {
    const randomTimes = value * 1
    if (randomTimes == 0) {
      return alert('กรุณาใส่ตัวเลขก่อน')
    }
    const { id, times } = randomNationId(randomTimes)
    setState({ ...state, array: id, times })
  }

  const downloadTxtFile = () => {
    const element = document.createElement('a')
    const file = new Blob([state.array.join('\n')], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'random-nationID.txt'
    document.body.appendChild(element)
    element.click()
  }

  const clearArray = () => setState(initState)

  return (
    <div>
      {state.array.length > 0 && <p>จำนวนการสุ่มผิด {state.times} ครั้ง</p>}
      <Search
        style={{ marginBottom: '10px' }}
        placeholder="กรุณาใส่จำนวนเลขบัตรประชาชนที่ต้องการสุ่ม ตั้งแต่ 0-200"
        enterButton="Random"
        value={state.value}
        size="large"
        onSearch={handleOnSearch}
        onChange={handleOnChange}
      />
      <Row
        gutter={16}
        style={{
          height: '600px',
          width: '100%',
          overflowY: 'scroll',
        }}
      >
        <Col span={24}>
          {state.array.map((item, index) => (
            <Tooltip
              key={index}
              trigger={'focus'}
              title="คัดลอกแล้ว !!"
              placement="topLeft"
              overlayClassName="numeric-input"
            >
              <CopyToClipboard text={item}>
                <div>
                  <p>ผลการสุ่มชุดที่ {index + 1}</p>
                  <Input
                    key={item}
                    value={item}
                    readOnly
                    size="large"
                    style={{ marginBottom: '10px' }}
                  />
                </div>
              </CopyToClipboard>
            </Tooltip>
          ))}
        </Col>
      </Row>
      {state.array.length > 0 && (
        <Row gutter={16}>
          <Col>
            <Button
              onClick={downloadTxtFile}
              type="primary"
              icon={<DownloadOutlined />}
              size="large"
            >
              Download
            </Button>
          </Col>
          <Col>
            <Button
              onClick={clearArray}
              type="primary"
              icon={<ClearOutlined />}
              size="large"
            >
              Clear
            </Button>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default MultiRandom
