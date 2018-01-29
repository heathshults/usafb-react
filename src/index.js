import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'styles/usafb-bootstrap-red.css';

import App from 'pages/app/App';
import 'styles/usafb-bootstrap.css';
import 'styles/application.css';
import 'index.css';
import registerServiceWorker from './registerServiceWorker';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('pages/app/App', () => { render(App); });
}

registerServiceWorker();
