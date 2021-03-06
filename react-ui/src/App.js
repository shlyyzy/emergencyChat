import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Setup/Home';
import Join from './components/Setup/Join';
import Name from './components/Setup/Name';
import Chatroom from './components/Room/Chatroom';
import Maproom from './components/Room/Maproom';
import Chat from './components/Chat/Chat';
import Map from './components/Map/Map';
import Info from './components/Info';

function App() {
  const [message, setMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState('/api');

  const fetchData = useCallback(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setMessage(json.message);
        setIsFetching(false);
      }).catch(e => {
        setMessage(`API call failed: ${e}`);
        setIsFetching(false);
      })
  }, [url]);

  useEffect(() => {
    setIsFetching(true);
    fetchData();
  }, [fetchData]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/join" component={Join}></Route>
          <Route path="/name" component={Name}></Route>
          <Route path="/chatroom" component={Chatroom}></Route>
          <Route path="/map" component={Maproom}></Route>
          <Route path="/chat" component={Chat}></Route>
          {/* <Route path="/map" component={Map}></Route> */}
          <Route path="/info" component={Info}></Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
