import React from 'react';
import './form.css';
import {Scale} from '../scale/scale';

export class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {suggestions: '',email:'', mark:null};

    this.handleSuggestionChange = this.handleSuggestionChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

    handleSuggestionChange(event){
      this.setState({suggestions: event.target.value})
    }

    handleEmailChange(event){
      this.setState({email: event.target.value})
    }

    handleScaleChange = (value) =>{
      this.setState({
        mark:value
      })
    }

    handleSubmit(event) {
      event.preventDefault();
      let newItem = {
        mark:this.state.mark,
        suggestions:this.state.suggestions,
        email:this.state.email
      }
      this.props.onSubmit(newItem);
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label className='header'>
              How likely are you to recommend our service to a friend or colleague?
            </label>
            <Scale onChange={this.handleScaleChange}/>
            <div className='scale-description'>
              <label>0 - Extremely Unlikely</label>
              <label>10 - Extremely Likely</label>
            </div>
              <label>
                  What feature can we add to improve?      
              </label>
              <textarea placeholder="We'd love to hear your suggestions"  id='suggestions' onChange={this.handleSuggestionChange}></textarea>
              <label>
                  Email (optional) 
              </label>
              <input type="text" placeholder="Someone@something.com" id='email' onChange={this.handleEmailChange}/>
              <input type="submit" className="send-button" value="SEND FEEDBACK"/>
          </form>
        );
      }
    }