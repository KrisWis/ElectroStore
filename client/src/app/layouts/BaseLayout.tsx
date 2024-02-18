import './App.module.scss';
import { Main } from '../../pages';
import SmoothScroll from '../../features/SmoothScroll/ui';

export const App: React.FC = (): React.JSX.Element => {

    return (
        <>
            <Main />
            <SmoothScroll />
        </>
    )
}