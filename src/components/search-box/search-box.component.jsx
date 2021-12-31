import React from "react";
import './search-box.style.css';

export const SearchBox=({placeholder,handlechange})=>(
    <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handlechange}
/>


);


/*   <input type='search' placeholder='search the monster' onChange={e=>
        { this.setState({searchField:e.target.value},()=>console.log(this.state.searchField));
        this.setState({searchField:e.target.value});
          
        }
        }/>*/