import './App.css';
import Leftsidebar from './components/Leftsidebar/Leftsidebar'
import Feed from './components/Feed/Feed';
import Rightwidgetbar from './components/Rightwidgetbar/Rightwidgetbar';
import Login from './Login';
function App() {
  return (
    <div className="app">
      
      <Leftsidebar/>
      <Feed/>
      <Rightwidgetbar/>
      
      {/* <Login/> */}
      

    </div>
  );
}

export default App;
