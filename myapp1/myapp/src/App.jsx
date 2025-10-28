import './App.css';
import './styles/typography.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StandingsPage from './pages/StandingsPage.jsx';
import NewsPage from './pages/NewsPage.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>FUTBOL.AI ⚽</h1>
          <nav>
            <Link to="/standings"><button>Tabla de posiciones</button></Link>
            <Link to="/news"><button>Noticias</button></Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2>Bienvenido, Nicolás 👋</h2>
                  <p>Selecciona una sección para comenzar.</p>
                </>
              }
            />
            <Route path="/standings" element={<StandingsPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
