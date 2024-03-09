import ReactDOM from 'react-dom/client';
import '../shared/index.scss';
import { App } from './layouts/BaseLayout.tsx';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
