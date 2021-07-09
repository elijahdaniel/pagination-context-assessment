import Pagination from './components/Pagination/Pagination';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PhotoMain from './components/PhotoPage/PhotoMain';

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
            <PhotoMain />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
