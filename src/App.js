import Navbar from './components/Navbar';
import Story from './components/Story';
import Posts from './components/Posts';
import Rightfixbar from './components/Rightfixbar';
import './App.css';

function App() {
  return (
    <div>
         <Navbar />
         <div className="box">
         <Story />
         <Posts />
         <Rightfixbar />
         </div>
    </div>
  );
}

export default App;
