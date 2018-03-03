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
        <div>
          <button type="button" className="btn btn-primary">Primary</button>
          <button
  type="button"
  className="btn btn-secondary">Secondary</button>
          <button type="button" className="btn btn-success">Success</button>
          <button type="button" className="btn btn-danger">Danger</button>
          <button type="button" className="btn btn-warning">Warning</button>
          <button type="button" className="btn btn-info">Info</button>
          <button type="button" className="btn btn-light">Light</button>
          <button type="button" className="btn btn-dark">Dark</button>
          <button type="button" className="btn btn-link">Link</button>
        </div>
      </main>
    );
  }
}

export default App;
