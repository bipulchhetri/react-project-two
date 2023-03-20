import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home'
import Videos from './Components/Videos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/Vidoes" element={<Videos/>} />

      </Routes>
<Footer/>
    </Router>
  );
}

export default App;