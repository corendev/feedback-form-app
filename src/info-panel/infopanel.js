import React from 'react';
    
export class InfoPanel extends React.Component{
  render(){
    console.log(this.props.items);
      return(
      <table>
        <tbody>
        <tr>
          <th>Mark</th>
          <th>Feature</th>
          <th>Email</th>
        </tr>
        {this.props.items.map((item)=>(
          <tr>
            <td>{item.mark}</td>
            <td>{item.suggestions}</td>
            <td>{item.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
      );
    }
  }