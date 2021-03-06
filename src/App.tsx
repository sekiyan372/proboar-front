import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Top } from './pages/Top'
import { New } from './pages/New'
import { Index } from './pages/Index'
import { Show } from './pages/Show'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ Top }></Route>
          <Route path="/new" component={ New }></Route>
          <Route path="/index" component={ Index }></Route>
          <Route path="/show" component={ Show }></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
