import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Layout from  './components/Layout'
import Home from  './components/Home'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="About" element={<About />}/>
        <Route path="Contact" element={<Contact />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
