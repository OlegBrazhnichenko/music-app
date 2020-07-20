import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'
import bottomNavigationItems from './constants'
import './styles.scss'

const BottomNav = () => {
  const history = useHistory();

  const [selectedNavItem, setSelectedNavItem] = useState(0);

  return (
    <BottomNavigation
      value={selectedNavItem}
      onChange={(event, navItemIndex) => {
        setSelectedNavItem(navItemIndex);
        history.push(bottomNavigationItems[navItemIndex].path)
      }}
      showLabels
      className="bottom-nav"
    >
      {bottomNavigationItems.map(({label, Icon}) => (
        <BottomNavigationAction
          key={label}
          label={label}
          icon={Icon}
        />
      ))}
    </BottomNavigation>
  )
};

export default BottomNav;
