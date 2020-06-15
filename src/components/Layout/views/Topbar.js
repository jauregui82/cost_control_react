import React from 'react';
import clsx from 'clsx';
import { withStyles, Tab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LinearLoader from '../../common/LinearLoader';

// Redux hooks and actions
// import { useSelector } from 'react-redux';

// Styles
import styles from './styles/topBar';
// import { CardUser } from 'src/components/userCard/idex';

// Component
const Topbar = (props) => {
  const {
    classes, open, setOpen, checked, setChecked,
  } = props;
  // React Hooks
  // const loader = useSelector((state) => state.globals.loader);
  // const payerState = useSelector((state) => state.payer);
  // Helper functions

  const handleOpenFade = () => {
    setChecked(!checked);
  };

  // Render
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        {/* {loader && <LinearLoader />} */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            className={classes.menuButton}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap>
            Control de gastos
          </Typography>
          &nbsp;
          &nbsp;
          &nbsp;
          <Typography variant="subtitle2" noWrap>
            {`Saldo actual: 000.000,00`}
          </Typography>
          <Tab style={{ marginLeft: 'auto' }} onClick={() => handleOpenFade()} icon={<AccountCircleIcon />} />
          {/* <Zoom in={checked} timeout={900}>
            <div style={{ position: 'relative' }}>
              <CardUser />
            </div>
          </Zoom> */}
          {/* <Tab style={{ marginLeft: 'auto' }} label="Cerrar Sesión" onClick={() => closeSessionAction()} icon={<PowerSettingsNew />} /> */}

        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withStyles(styles)(Topbar);
