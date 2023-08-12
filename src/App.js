import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NotFound from './Screens/NotFound';
import Home from './Screens/Home';


function App() {
  return (
    <Router>
   
      <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
   
      <Route path="/home/*" element={<Home />} />
    
      
     
      <Route path="*" element={<NotFound />} /> {/* Add a catch-all route */}
    </Routes>
    
      </div>
    </Router>
  );
}

export default App;
