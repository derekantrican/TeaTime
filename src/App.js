import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Homepage';
import { Layout } from './components/Layout';
import { Guidelines } from './pages/Guidelines';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          // Using div & NavBar directly for HomePage as it needs height 100% (minHeight 100% doesn't seem to work)
          <div style={{height: '100%'}}>
            <NavBar />
            <HomePage/>
          </div>
        }/>
        {/*Todo: I want this site to act as a single-page app. That's not how it's acting now and I'm not sure what to change*/}
        <Route path='/guidelines' element={
          <Layout>
            <Guidelines/>
          </Layout>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
