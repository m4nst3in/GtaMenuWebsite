import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Overview from './Pages/Overview';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/overview" element={<Overview />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);