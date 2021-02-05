// import './App.css';
// import './app.less';
// import { Button } from 'antd';
// import 'antd/dist/antd.css'

// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default App;
