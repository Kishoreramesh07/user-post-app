import { React } from 'react'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UsernameModal from './containers/UsernameModal';
import PostListing from './containers/PostListing';
import CommentListing from './containers/CommentListing'
import ProtectedRoutes from './containers/ProtectedRoutes';
import PublicRoutes from './containers/PublicRoutes';

const theme = createTheme({
  typography: {
    color: "#5a5b75",
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/** Protected Routes */}
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/" element={<Navigate replace to="posts" />} />
              <Route path="posts" element={<PostListing />} />
              <Route path="comments" element={<CommentListing />} />
            </Route>

            {/** Public Routes */}
            <Route path="login" element={<PublicRoutes />}>
              <Route path="/login" element={<UsernameModal />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
