import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NotFound from './pages/404/404Main'
import useAuth from './hooks/useAuth';
import LoadingPage from './pages/loading/LoadingPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import Home from './pages/home/Home';
import Logs from './pages/logs/Logs';


function App() {
  const { isInitialized, isAuthenticated } = useAuth();


  return (
    !isInitialized ? <LoadingPage /> :
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route exact path='/login' element={<LoginPage/>} />
        <Route exact path='/register' element={<RegisterPage/>} />
        <Route path='/user/home' element={isAuthenticated ? <Home/> : <Navigate to="/login" />} />
        <Route path='/user/logs' element={isAuthenticated ? <Logs/> : <Navigate to="/login" />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}

export default App;
