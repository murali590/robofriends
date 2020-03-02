import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots'
import SearchBox from './SearchBox';
import 'tachyons';



class App extends Component
{  

	constructor()
	{
		super();
		this.state={
			robots: robots,
	        searchfield: ''
		}

	}

	onserachchange(event){
		console.log(event)
	}
	render(){
	return(
		<div className='tc'>
		<h1>RoboFriends</h1>
		<SearchBox searchchange={this.onserachchange}/>
         <Cardlist robots={this.state.robots}/>
         </div>
		);
	}

}
export default App;  