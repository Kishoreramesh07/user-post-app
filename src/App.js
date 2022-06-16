import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import PostListing from './containers/PostListing';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
