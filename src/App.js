import Navbar from './components/Navbar';
import Story from './components/Story';
import './App.css';

function App() {
  return (
    <div>
         <Navbar />
         <div className="box">
         <Story />
         </div>
    </div>
  );
}

export default App;
