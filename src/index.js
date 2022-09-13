import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Form} from './form/form';
import { InfoPanel } from './info-panel/infopanel';

class Container extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      items:[]
    };
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend = (value) =>{
    const items = this.state.items.slice();
    items.push(value);
    this.setState({items:items});
  }
  render(){
    return(
      <div>
        <Form onSubmit={this.handleSend}/>
        <InfoPanel items={this.state.items}/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);
