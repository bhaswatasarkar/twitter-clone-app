import './App.css';
import Leftsidebar from './components/Leftsidebar/Leftsidebar'
import Feed from './components/Feed/Feed';
import Rightwidgetbar from './components/Rightwidgetbar/Rightwidgetbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Default from './components/Default/Default';
// import Login from './Login';
function App() {
  return (
    <div className="app">
      <Leftsidebar/>
        <Routes>
        
          <Route exact path="/" element={<Feed/>}></Route>
          <Route exact path="/home" element={<Feed/>}></Route>
          <Route exact path="/explore" element={<Default/>}></Route>
          <Route exact path="/notifications" element={<Default/>}></Route>
          <Route exact path="/messages" element={<Default/>}></Route>
          <Route exact path="/bookmarks" element={<Default/>}></Route>
          <Route exact path="/lists" element={<Default/>}></Route>
          <Route exact path="/profile" element={<Default/>}></Route>
          <Route exact path="/more" element={<Default/>}></Route>
          
        </Routes>
      <Rightwidgetbar/>
      
      {/* <Login/> */}
      

    </div>
  );
}

export default App;
