
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/index';
import Expense from "./pages/expensetracker/index";
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/"  element={<Auth />}/>
        <Route path='/expense'  element={<Expense />} />

      </Routes>
      </Router> 
    </div>
  );
}

export default App;
