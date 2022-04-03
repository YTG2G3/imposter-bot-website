import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomePage, ResultsPage, NoPage } from './pages';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path='results/:resultid' element={<ResultsPage />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}