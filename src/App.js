import './App.css';
import About from './views/about';
import Home from './views/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './views/notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path = "/" element = {<Home/>} />
          <Route path = "/about" element = {<About/>}/>
          <Route default element = {<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
