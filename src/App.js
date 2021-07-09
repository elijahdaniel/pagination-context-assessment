import Pagination from './components/Pagination/Pagination';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PhotoList from './components/PhotoPage/PhotoList';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/pagination'>
            <Pagination />
          </Route>
          <Route path='/context'>
            <PhotoList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
