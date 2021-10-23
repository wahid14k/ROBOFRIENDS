import React, { Component } from 'react'
import './App.css';
import { CardList} from './component/card/card-list'
import { SearchBox} from './component/search-box/search-box'
class App extends Component {
  constructor(){
    super();

this.state ={
  monsters: [],
  searchField:''
}}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>response.json())
  .then(user=>this.setState({monsters:user}))
}
  render(){
    const { monsters,searchField }=this.state;
    const filteredMonsters = monsters.filter(user=>
    user.name.toLowerCase().includes(searchField.toLowerCase())
 )


    return ( 
      <div className="App">

      <div className='header'>
        <h1>ROBO FRIENDS</h1>
      </div>
      <SearchBox
       
      placeholder="search monsters"
      handleChange={e =>{this.setState({searchField:e.target.value})}} />
      <CardList monsters ={filteredMonsters}/>
      </div>
    );
  }
 
}

export default App;
