import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { FlyoutMenus } from './photoshop/FlyoutMenus';
FlyoutMenus();

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
