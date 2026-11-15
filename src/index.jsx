import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // 필요한 CSS 파일을 import 합니다.
import App from './App';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
