import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Homepage';
import { Layout } from './components/Layout';
import { Guidelines } from './pages/Guidelines';
import NavBar from './components/NavBar';
import { About } from './pages/About';
import { Groups } from './pages/Groups';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
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
        <Route path='/groups' element={
          <Layout>
            <Groups/>
          </Layout>
        }/>
      </Routes>
    </HashRouter>
  );
}

export default App;
