import './App.module.scss';
import { Main } from '../../pages';
import { Route, Routes } from 'react-router-dom';

export const App: React.FC = (): React.JSX.Element => {

    return (
        <>
            <Routes>
                <Route path="/ElectroStore" element={<Main />} />
                <Route path="/ElectroStore/item/:id" element={<div>Страница товара</div>} />
            </Routes>
        </>
    )
}