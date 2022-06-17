import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component{
  
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    
    ) )
    
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {searchField}
    })
    
  }

  render(){

    const {monsters, searchField } = this.state;
    const { onSearchChange } = this

    
    const filterMonster = monsters.filter((val) => {
      return val.name.toLocaleLowerCase().includes(searchField)
      
  });

    return <div className='App'>

            <h1 className="app-title">Monsters Rolodex</h1>

            <SearchBox 
                className='monster-search-box'
                onChangeHandler = {onSearchChange}
                placeholder='search monster'
            />
            
             <CardList monsters = {filterMonster}/>
             
          </div>
  }
   
}


export default App;