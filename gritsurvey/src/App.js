import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Pages, navList } from './components/pages';
import MainPage from './components/mainpage';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Current Issues: Sending props to sub-components with Router

const [
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
  Page10,
] = Pages;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: null };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Test App</h2>
        </div>
        <Router>
          <div>
            <div>
              <ul className="nav">
                <li>
                  <Link to="/">Start</Link>
                </li>
                {navList}
              </ul>
            </div>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/q1" component={Page1} />
              <Route path="/q2" component={Page2} />
              <Route path="/q3" component={Page3} />
              <Route path="/q4" component={Page4} />
              <Route path="/q5" component={Page5} />
              <Route path="/q6" component={Page6} />
              <Route path="/q7" component={Page7} />
              <Route path="/q8" component={Page8} />
              <Route path="/q9" component={Page9} />
              <Route path="/q10" component={Page10} />
              <Route
                render={function() {
                  return <h1>Error: Nothing Found</h1>;
                }}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
