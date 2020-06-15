import React, { useState } from 'react';
import {
  CssBaseline, withStyles, Container,
} from '@material-ui/core';
import Topbar from './views/Topbar';
// import Sidebar from './views/Sidebar';
// // Apollo client
// import { useQuery } from '@apollo/client';
// import { GET_AVAILABLE_SERVICES } from 'src/models/RegisterModel';
// // Redux Hooks and actions
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteSession as closeSession, openSidebar } from 'src/redux/actions/globalActions';
// Styles
import styles from './views/styles/styles';

const Layout = (props) => {
  /* Hooks functions apollo client this is for testing auth refresh token,
     to do: delete next lines
  */
  // const { data, loading } = useQuery(GET_AVAILABLE_SERVICES);
  // if (loading) {
  //   console.log('cargando');
  // } else {
  //   console.log(data);
  // }

  const { classes, children, container } = props;
  const [checked, setChecked] = useState(false);
  const [sidebarOpen, setOpen] = useState(false);
  // const dispatch = useDispatch();
  // const sidebarOpen = useSelector((state) => state.globals.sidebar);
  // const setOpen = (val) => dispatch(openSidebar(val));

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Topbar
        open={sidebarOpen}
        checked={checked}
        setOpen={setOpen}
        setChecked={setChecked}
        closeSession={() => setOpen(false)}
      />
      {/* <Sidebar open={sidebarOpen} setOpen={setOpen} /> */}
      <main className={classes.content}>
        {/* <Fade in={checked}>
          <span onClick={() => setChecked(false)} className="wraper-found-user-detail" />
        </Fade> */}
        <div className={classes.toolbar} />
        <Container maxWidth={container ?? 'lg'}>
          {children}
        </Container>
      </main>
    </div>
  );
};
export default withStyles(styles)(Layout);
