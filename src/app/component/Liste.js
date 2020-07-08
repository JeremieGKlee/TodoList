import React, { Component } from 'react';
// import ToDo from './component/ToDo';

class Liste extends Component{


  constructor () {
    super();
    this.state = {
        newtodo:"",
        todo:[],
        did:[],
    }
  }

addToDo(e){
    e.preventDefault()
    if(this.state.newtodo!==""){
        this.setState({
         newtodo :"",
         todo: [...this.state.todo, this.state.newtodo]
        }, ()=> console.log(this.state.todo))
    }  
}

deleteToDo(item){
    var todo= this.state.todo;
    var index =todo.indexOf(item)
    todo.splice(index, 1);
    this.setState({todo: todo})

}
validateToDo(item){
    var todo= this.state.todo;
    var index =todo.indexOf(item)
    // todo.splice(index, 1);
    this.setState({todo: todo})
}


onChange(e) {
    this.setState({
        newtodo: e.target.value
    }, ()=> console.log(this.state.newtodo))
}

displayListe(){
        const list = this.state.todo
        return list.map((item, index)=>
        <li key={index}>
            {item}
          <button onClick = {this.validateToDo.bind(this,item)}>Fait</button>  
          <button onClick = {this.deleteToDo.bind(this,item)}>Suppression</button>
        </li>
        );
}

displayDidListe(){
    const list = this.state.todo
    return list.map((item, index)=>
    <li key={index}>
        {item}
      <button onClick = {this.deleteToDo.bind(this,item)}>Fait</button>
    </li>
    );
}


  render(){
    return(
      <div>
        
        <p>
        {this.state.todo.length === 0 ? "Cool j'ai rien à faire": (" j'ai " + this.state.todo.length + (this.state.todo.length === 1 ? " tâche" : " tâches" )+ " à faire pffftttt...." )}
            
        </p>
        <label htmlFor="newtodo">Que dois-je faire ? </label>
          <input value={this.state.newtodo} onChange={this.onChange.bind(this)}  type="text" name="newtodo" id="newtodo" />
          <button onClick = {this.addToDo.bind(this)}>Ajouter</button>
        <div>
            <ul>{this.displayListe()}</ul>
        </div>
        <div>
            <ul>{this.displayDidListe()}</ul>
        </div>
      </div>
    )
  }
}

export default Liste;