// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

// App
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();