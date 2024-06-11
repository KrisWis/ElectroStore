import './App.module.scss';
import { Main } from '../../pages';
import { Route, Routes } from 'react-router-dom';
import { SERVER_URL } from '../appConfig';

export const App: React.FC = (): React.JSX.Element => {

    return (
        <>
            <Routes>
                <Route path={`/${SERVER_URL}`} element={<Main />} />
                <Route path={`/${SERVER_URL}/item/:id`} element={<div>Страница товара</div>} />
            </Routes>
        </>
    )
}