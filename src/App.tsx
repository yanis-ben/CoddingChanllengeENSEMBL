import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Header } from './dist/Header';
import Home from './dist/Home';
import { Footer } from './dist/Footer';
import Movies from './dist/Movies';
import Series from './dist/Series';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/series" exact component={Series}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
