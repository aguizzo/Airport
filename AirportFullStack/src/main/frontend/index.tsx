import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import App from 'Frontend/App';

const outlet = document.getElementById('outlet')!;
let root = (outlet as any)._root ?? createRoot(outlet);
(outlet as any)._root = root;
root.render(createElement(App));
