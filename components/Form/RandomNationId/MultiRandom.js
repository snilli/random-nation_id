import { Component } from 'react'
import { Input, Tooltip } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import randomNationId from '../../../libraries/randomNationId'

const { Search } = Input

class Da extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      array: [],
      times: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSearch = this.handleOnSearch.bind(this)
  }

  handleOnSearch(value) {
    const { id, times } = randomNationId(parseInt(value))
    this.setState({ array: id, times })
    console.log(this.state.array)
  }

  handleOnChange(e) {
    const { value } = e.target
    this.setState({ value: value })
  }

  render() {
    return (
      <div>
        {this.state.times && <p>จำนวนการสุ่ม {this.state.times} ครั้ง</p>}
        <Search
          placeholder="กดปุ่มเพื่อสุม"
          enterButton="Search"
          value={this.state.value}
          size="large"
          onSearch={this.handleOnSearch}
          onChange={this.handleOnChange}
        />
        {this.state.array.map(item => (
          <Tooltip
            trigger={['focus']}
            title="คัดลอกแล้ว !!"
            placement="topLeft"
            overlayClassName="numeric-input"
          >
            <CopyToClipboard text={item}>
              <Input
                key={item}
                value={item}
                readOnly
                size="large"
                style={{ marginBottom: '10px' }}
              />
            </CopyToClipboard>
          </Tooltip>
        ))}
      </div>
    )
  }
}
export default Da
