import React, { Component } from 'react';
import LinkList from './componnents/LinkList';
import CreateLink from "./componnents/CreateLink";

class App extends Component {
  render() {
    return (
        <>
          <div>
          <LinkList />
          </div>
          <br />
          <div>
            <CreateLink />
          </div>
        </>
    );
  }
}

export default App;
