import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order:[]
    };
  }

  componentDidMount(){
    fetch('api')
    .then(res=>res.json())
    .then(data=>this.setState({order:data}));
  }

  render(){
    const {order} = this.state;
    console.log(order)
    return(
      <div>
            returnCode: {order.returnCode}<br />
            returnCode: {order.errorMessage}<br />
            )
            </div>
    )
  }
}

export default App;