import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/HomePage/App';
import reportWebVitals from './reportWebVitals';
import { EmployeeProvider} from './utils/context/EmployeeContext';
import { NavProvider} from './utils/context/NavigationContext';
import { ModalProvider} from './utils/context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <NavProvider>  
      <EmployeeProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </EmployeeProvider>
    </NavProvider>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
