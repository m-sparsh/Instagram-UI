import Navbar from './components/Navbar';
import Story from './components/Story';
import Posts from './components/Posts';
import './App.css';

function App() {
  return (
    <div>
         <Navbar />
         <div className="box">
         <Story />
         <Posts />
         </div>
    </div>
  );
}

export default App;
