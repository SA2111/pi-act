import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // defines path for layout component
    <Routes>
        <Route path="/" element={<Layout />}

    </Routes>
  )
}

export default App;
