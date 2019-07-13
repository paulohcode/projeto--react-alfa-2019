// import React from 'react';
// import './App.css';
// //import {Alert} from 'reactstrap'
// //import Relogio from './Relogio';
// //import Form from './Form';
// import MainLayout from './layout/MainLayout';

// class App extends React.Component {

//   // state = {
//   //   dateTime: new Date()
//   // }

//   // componentDidMount(){
//   //   setInterval(this.atualizarRelogio, 1000)
//   // }

//   // atualizarRelogio = () => {
//   //   const newState = {
//   //     dateTime: new Date()
//   //   }
//   //   this.setState(newState)
//   // }

//   render() {
//     // const date = this.state.dateTime
//     return (
//       <div className="App">
//         <MainLayout></MainLayout>
//       {/* <Form  />
//         <Relogio interval={400}/>
//         <Relogio interval={1000}/>
//         <Relogio interval={1250}/>
//         <Alert color="primary">
//           Este é um alert do bootstrap 4
//         </Alert>
//         <Alert color="success">
//           Este é um alert do bootstrap 4
//         </Alert> */}
//       </div>
//     );
//   }
// }
// export default App;

import React, {Component} from 'react';
import MainLayout from './layout/MainLayout';

class App extends Component{
  render(){
    return(
      <div className="App">
        <MainLayout />
      </div>
    )
  }
}

export default App
