import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mo'
    };
  }

  render() {
    return (
      <main className="main">
        <h1>Hello mate !</h1>
      </main>
    );
  }
}

export default App;
