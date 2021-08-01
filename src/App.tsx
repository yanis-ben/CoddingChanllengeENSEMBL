import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import { Header } from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Empty from './pages/Empty';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path="/home" exact component={Home}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/series" exact component={Series}/>
            <Route component={Empty} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
