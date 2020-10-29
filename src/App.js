import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthComponent from './application/modules/default/auth';
import { PrivateRouteLoggedUser } from './system/default/privateRoute';
import MainComponent from './system/default/main';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import theme from './system/styled/theme';
import GlobalStyle from './system/styled/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Helmet>
          <title>AIRSTATE</title>
        </Helmet>
        <Switch>
          <Route path="/login" component={AuthComponent}></Route>
          {/* <Route path="/" component={MainComponent}></Route> */}
          <PrivateRouteLoggedUser path="/" component={MainComponent} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
