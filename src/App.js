import {
  Routes,
  Route
} from "react-router-dom";

import CoinsListPage from './routes/CoinsListPage';
import CoinDetailsPage from './routes/CoinDetailsPage';
import HomePage from "./routes/HomePage";
import Header from './components/Header';
import './App.style.scss';


function App() {
  return (
    <div className="App">
          <>
            <Header />
            <Routes>
              <Route index path="/" element={ <HomePage /> } />
              <Route path="/coinList" element={ <CoinsListPage /> } />
              <Route path="/coin/:uuid" element={ <CoinDetailsPage /> } />
            </Routes>
          </>
    </div>
  );
}

export default App;
