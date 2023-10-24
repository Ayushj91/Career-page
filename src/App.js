import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FilterTwo} from './components/Sidebar';
import ApplyPage from './components/ApplyPage';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FilterTwo/>} />
        <Route path="/job/:jobId" element={<ApplyPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
