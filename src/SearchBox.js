import React from 'react';
import 'tachyons';

const  SearchBox= ({serachfield,serachchange})=>{
	return (
		<div className='pa2'>
		<input className='pa3 ba b--green bg-lightest-blue'
		type='search' placeholder='serach robot'
		onChange={serachchange}
		/>
		</div>
		);
}
export default SearchBox; 