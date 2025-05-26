
import './App.css';
import Nav from './components/Nav.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Products listing component</h1>} />
        <Route path="/add-product" element={<h1> Add product component</h1>} />
        <Route path="/update-product" element={<h1>Update product component</h1>} />
        <Route path="/logout" element={<h1>Logout component</h1> } />
        <Route path="/profile" element={<h1>Profile component</h1>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
