import React, { Component } from 'react'
import {tabListMovies} from './Data'
import ListMovie from './component/listMovie/ListMovie'
import AddMovie from './component/addMovie/AddMovie'
import './App.css'
import SearchMovie from './component/searchMovie/SearchMovie'

export default class App extends Component {
  state={
    tabListMovies:tabListMovies,
    searching:""
  }

  add=(newMovie)=>{
     this.setState({
       tabListMovies:[...this.state.tabListMovies,newMovie]
     })
     console.log("newMovie",newMovie)
  }
  search=(item)=>{
    this.setState({
      searching:item
    })
    console.log("item",item)
  }
  render() {
    return (
      <div>
        <SearchMovie search={this.search}/>
        <ListMovie tab={this.state.tabListMovies} searching={this.state.searching}/>
        <AddMovie add={this.add}/>
      </div>
    )
  }
}
