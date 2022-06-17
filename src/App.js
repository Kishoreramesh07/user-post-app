import { React } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UsernameModal from './containers/UsernameModal';
import PostListing from './containers/PostListing';
import ProtectedRoutes from './containers/ProtectedRoutes';
import PublicRoutes from './containers/PublicRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/** Protected Routes */}
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Navigate replace to="posts" />} />
            <Route path="posts" element={<PostListing />} />
          </Route>

          {/** Public Routes */}
          <Route path="login" element={<PublicRoutes />}>
            <Route path="/login" element={<UsernameModal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
