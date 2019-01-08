import { Component } from 'react'
import { Input, Tooltip, Button } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import randomNationId from '../../../libraries/randomNationId'

class SingleRandom extends Component {
  state = {
    value: '',
    loading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 320)
    const { id } = randomNationId(1)
    this.setState({ value: id })
  }

  render() {
    return (
      <div>
        <Tooltip
          trigger={['focus']}
          title="คัดลอกแล้ว !!"
          placement="topLeft"
          overlayClassName="numeric-input"
        >
          <CopyToClipboard text={this.state.value}>
            <Input
              placeholder="กดปุ่มเพื่อสุ่มเลขบัตร"
              // enterButton="Search"
              readOnly
              value={this.state.value}
              size="large"
            />
          </CopyToClipboard>
        </Tooltip>

        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.enterLoading}
          size="large"
        >
          เริ่มสุ่ม
        </Button>
      </div>
    )
  }
}

export default SingleRandom
