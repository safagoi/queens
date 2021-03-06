import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import QueenDetails from './pages/QueenDetails';


function App() {
    return (
        <div className='App'>
          <NavBar />

          <main className='app-main'>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="queen/:id" element={<QueenDetails />} ></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
        </div>
    );
}

export default App;
