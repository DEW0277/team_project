import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { navLinks } from './routes/Route';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {navLinks.map((navLink) => (
          <Route path={navLink.path} element={navLink.element} />
        ))}
        <Route path='*' element={<PageNotFound />} />
        
      </Routes>
    </div>
  );
}

export default App;
