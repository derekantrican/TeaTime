import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Homepage';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Layout>
            <HomePage/>
          </Layout>
        }/>
        {/*Todo: I want this site to act as a single-page app. That's not how it's acting now and I'm not sure if I'll have to change anything*/}
      </Routes>
    </Router>
  );
}

export default App;
