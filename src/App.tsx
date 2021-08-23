import { EmployeeList } from './pages/Employees/EmployeeList'
import './App.css';
import { Header } from './pages/Header';
import { Registration } from './pages/Form';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Header />
    <Router>
    <Switch>
    <Route path="/" exact> 
     <EmployeeList />
     </Route>
     <Route path="/register"  component={Registration}/>
     <Route path="/edit/:id"  component={Registration}/>

     
     </Switch>
     </Router>
    </div>
  );
}

export default App;
