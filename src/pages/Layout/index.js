import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import BottomNav from './BottomNav'
import Player from 'pages/Player'

import { Container } from '@material-ui/core'


class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {}

  }

  render() {
    return (
      <div className="Layout">
        <Header />
        <Container maxWidth="lg">
          {this.props.children}
        </Container>
        <Player />
        <BottomNav />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;