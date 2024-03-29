import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Homepage';
import { Layout } from './components/Layout';
import { Guidelines } from './pages/Guidelines';
import NavBar from './components/NavBar';
import { About } from './pages/About';
import { Groups } from './pages/Groups';
import ScrollToTop from './components/ScrollToTop';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    ReactGA.initialize("G-604M3HR3LC");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={
          // Using div & NavBar directly for HomePage as it needs height 100% (minHeight 100% doesn't seem to work)
          <div style={{height: '100%'}}>
            <NavBar />
            <HomePage/>
          </div>
        }/>
        <Route path='/about' element={
          <Layout>
            <About/>
          </Layout>
        }/>
        <Route path='/guidelines' element={
          <Layout>
            <Guidelines/>
          </Layout>
        }/>
        <Route path='/groups/:groupParam?' element={
          <Layout>
            <Groups/>
          </Layout>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
