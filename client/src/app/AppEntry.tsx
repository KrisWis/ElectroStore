import ReactDOM from 'react-dom/client';
import '../shared/index.scss';
import { App } from './layouts/BaseLayout.tsx';
import { Provider } from 'react-redux';
import { store } from './AppStore.ts';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>
);