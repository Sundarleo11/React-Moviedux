import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Watchlist from './components/Watchlist';



function App() {
  return (
    <div className="App">
      <div className='container'></div>
       <Header></Header>

       <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">WatchList</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={ <MoviesGrid></MoviesGrid>}> </Route>
          <Route path="/watchlist" element={ <Watchlist></Watchlist>}> </Route>
          
        </Routes>
       </Router>
 
      
      <Footer></Footer>
    </div>
  );
}

export default App;
