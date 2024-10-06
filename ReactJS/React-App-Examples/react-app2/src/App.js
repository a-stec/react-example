import React from 'react';
// import logo from './logo.svg';
import './App.css';
import User from './components/User/User';
import Counter from './components/Counter/Counter';
import Colors from './components/Colors/Colors';

// function App() {
//   return (
//     // <div className="App">
//     <React.Fragment>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <User />
//       <City />
//     </React.Fragment>
//     // </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
       {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https:reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header> */}
       <User />
       <Counter start={0}/>
       <Colors />
     </React.Fragment>
    );
  }
}


export default App;
