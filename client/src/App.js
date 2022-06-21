import { Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/create-post" className="nav-link">Create A Post</Link>|
        <Link to="/" className="nav-link">Home Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
