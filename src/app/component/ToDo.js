import React, { Component } from 'react';

const todos =[]
class ToDo extends Component{

  constructor (props) {
    super(props);
    this.state = {
      texte:""
    }
  }







  render(){
    return(
      <div>
        <label for="newtodo">Que dois-je faire ? </label>
          <input type="text" name="newtodo" id="newtodo" />
          <input type="submit" />
      </div>
    )
  }
}

export default ToDo;