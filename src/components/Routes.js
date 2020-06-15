import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { SnackbarProvider } from 'notistack';
// App Components
// import { connect } from 'react-redux';
//Theme
import { mainTheme } from '../MuiTheme';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
//Components
import { HistorialPayment } from './historial';
import { App } from '../App';


//Style theme
const theme = createMuiTheme(mainTheme);
/**
 * Create Routes
 */
export function Routes(props) {
  return (
    <ThemeProvider theme={theme}>
      {/* <SnackbarProvider maxSnack={3}> */}
        <BrowserRouter>
          <>
            <Switch>
              {/* <Route key={0} path="/" component={props.globals.session ? Kpis : () => <Redirect to="/login" />} exact /> */}
              {/* <Route path="/login" component={SignIn} /> */}
              <Route
                key={0}
                path="/"
                // component={props.globals.session ? Dashboard : () => <Redirect to="/login" />}
                component={App}
                exact
              />
              <Route
                key={1}
                path="/history"
                // component={props.globals.session ? Dashboard : () => <Redirect to="/login" />}
                component={HistorialPayment}
                exact
              />
              {/* <Route
                key={2}
                path="/committee-dashboard"
                component={props.globals.session ? Dashboard : () => <Redirect to="/login" />}
                exact
              /> */}
            </Switch>
          </>
        </BrowserRouter>
      {/* </SnackbarProvider> */}
    </ThemeProvider>
  );
}

// const mapStateToProps = (state) => ({
//   globals: state.globals,
// });
// const wrapper = connect(mapStateToProps);

// export default wrapper(Routes);
