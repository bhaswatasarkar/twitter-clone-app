import './App.css';
import Leftsidebar from './components/Leftsidebar/Leftsidebar'
import Feed from './components/Feed/Feed';
import Rightwidgetbar from './components/Rightwidgetbar/Rightwidgetbar';
function App() {
  return (
    <div className="app">
      
      <Leftsidebar/>
      <Feed/>
      <Rightwidgetbar/>
      
      
      

    </div>
  );
}

export default App;
