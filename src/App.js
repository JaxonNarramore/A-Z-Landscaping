import './App.css';
import Home from './Components/Home'
import About from './Components/About.js'
import Navbar from './Components/Navbar.js'
import Excavation from './Components/Services/Excavation.js'
import Irrigation from './Components/Services/Irrigation.js'
import Maintenence from './Components/Services/Maintenence.js'
import MasonryAndStone from './Components/Services/MasonryAndStone.js'
import OutdoorLiving from './Components/Services/OutdoorLiving.js'
import Hardscaping from './Components/Services/Hardscaping.js'
import Landscaping from './Components/Services/Landscaping.js'
import ScrollToTop from './Components/ScrollToTop'
import PopUp from './Components/PopUp.js'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop />
        <PopUp />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/excavation' component={Excavation} />
          <Route path='/irrigation' component={Irrigation} />
          <Route path='/maintenence' component={Maintenence} />
          <Route path='/masonryandstone' component={MasonryAndStone} />
          <Route path='/outdoorliving' component={OutdoorLiving} />
          <Route path='/hardscaping' component={Hardscaping} />
          <Route path='/landscaping' component={Landscaping} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
