import React from 'react'
import Layout from 'pages/Layout'
import Favorite from 'pages/Favorite'
import Playlists from 'pages/Playlists'

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

const Pages = () => {

  return (
    <Layout>
      <Switch>
        <Route exact path={'/Favorite'} component={Favorite} />
        <Route exact path={'/Playlists'} component={Playlists} />
        <Redirect to={'/Favorite'} />
      </Switch>
    </Layout>
  )
};

export default Pages
