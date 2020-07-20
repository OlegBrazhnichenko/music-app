import React from 'react'
import {
  QueueMusic,
  Favorite,
} from '@material-ui/icons'

const bottomNavigationItems = [
  {
    label: 'Favorite',
    Icon: <Favorite />,
    path: '/Favorite',
  },
  {
    label: 'Play lists',
    Icon: <QueueMusic />,
    path: 'Playlists',
  },
];

export default bottomNavigationItems;
