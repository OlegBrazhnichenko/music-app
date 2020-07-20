import React from 'react';
import {
  AppBar,
  Typography,
  Container,
} from '@material-ui/core';

import './styles.scss'

const Header = () => {
  return (
    <AppBar
      className="header"
      position="static"
    >
      <Container maxWidth="lg">
        <Typography className="header_title" variant="h5">
          Music app
        </Typography>
      </Container>
    </AppBar>
  )
};

export default Header;