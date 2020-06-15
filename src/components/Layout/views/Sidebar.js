import React from 'react';
import clsx from 'clsx';
// import { Link } from 'react-router-dom';
import { withStyles, useTheme, Tooltip } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
// Styles
import styles, { CustomListItemCss, CustomListItemIconCss } from './styles/sideBar';
// Redux hook
// import { useSelector } from 'react-redux';
// Custom items
const CustomListItem = withStyles(CustomListItemCss)(ListItem);
const CustomListItemIcon = withStyles(CustomListItemIconCss)(ListItemIcon);

const compareLocationsPaths = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};
const Sidebar = (props) => {
  const { classes, open } = props;
  const theme = useTheme();
  const location = window.location.pathname;
  // const payerState = useSelector((state) => state.payer);
  const menuList = [
    {
      id: 1,
      icon: <InboxIcon />,
      permission: true,
      title: 'Agrega operación',
      value: '/',
    },
    {
      id: 2,
      icon: <InboxIcon />,
      permission: true,
      title: 'Listado de operaciones',
      value: '/list-payers',
    },
    // {
    //   id: 3,
    //   icon: <InboxIcon />,
    //   permission: true,
    //   title: 'Dashboard',
    //   value: `/dashboard`,
    // },
  ];
  return (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => props.setOpen(false)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
          {menuList.map((item, index) => (
            <CustomListItem
              button
              // component={Link}
              divider
              key={item.id}
              // selected={compareLocationsPaths(item.value, location)}
              to={item.value}
              // disabled={!payerState.payerSelected.id}
            >
              <CustomListItemIcon><Tooltip title={item.title}>{item.icon}</Tooltip></CustomListItemIcon>
              <ListItemText className={classes.textItem} primary={item.title} />
            </CustomListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
export default withStyles(styles)(Sidebar);
