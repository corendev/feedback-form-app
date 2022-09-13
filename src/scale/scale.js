import React from 'react';
import './scale.css'
import {Mark} from '../mark/mark.js';

export class Scale extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      markStates: Array(11).fill(false),
      currentMark:null,
    };
  }

  handleClick(i)
  {
    let markStates = this.state.markStates.slice().fill(false);
    this.setState({markStates:markStates});
    markStates[i]=!markStates[i];
    this.setState({currentMark:i});
    this.props.onChange(i);
  }

  renderMark(i)
  {
    return(
      <Mark value={i} isActive = {this.state.markStates[i]} onClick={()=>this.handleClick(i)}/>
    );
  }

  render(){
    return(
      <div>
        <div className='scale-row'>
        {this.renderMark(0)}
        {this.renderMark(1)}
        {this.renderMark(2)}
        {this.renderMark(3)}
        {this.renderMark(4)}
        {this.renderMark(5)}
        </div>
        <div className='scale-row'>
        {this.renderMark(6)}
        {this.renderMark(7)}
        {this.renderMark(8)}
        {this.renderMark(9)}
        {this.renderMark(10)}
        </div>
      </div>
    );
  }
}