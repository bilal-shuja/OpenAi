import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OpenAIGUI from './components/OpenAIGUI';
import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import SearchComponent from './components/SearchOpenAi/SearchComponent';

function App() {
  return (
    <div>
      <Router >
           <Routes>
           <Route path="/" element={<SearchComponent/>}/>
           <Route path="/OpenAIGUI" element={<OpenAIGUI/>}/>


    
           </Routes>           
           </Router>
    </div>
  );
}

export default App;
