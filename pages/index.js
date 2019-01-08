import React, { Component } from 'react'

import MainTheme from '../containers/MainTheme'
import RandomNationId from '../components/Form/RandomNationId/MultiRandom'

class IndexPage extends Component {
  static getInitialProps() {
    // const isServer = !!req
    // reduxStore.dispatch(serverRenderClock(isServer))
    return {}
  }

  render() {
    return (
      <MainTheme>
        <RandomNationId />
      </MainTheme>
    )
  }
}

export default IndexPage
