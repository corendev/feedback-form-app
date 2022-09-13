import React from 'react';
import './mark.css';

export class Mark extends React.Component{
    
    constructor(props)
    {
      super(props);
    }
  
    render(){
      let clsName='mark';
      clsName+= this.props.isActive?' active-mark':' inactive-mark';
      return(
        <div className={clsName} onClick={this.props.onClick}>
            {this.props.value}
        </div>
    );
    }
  }