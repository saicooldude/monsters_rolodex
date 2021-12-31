import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import {CardList} from './components/card-list/card-list.component';


class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[
        
      ],
      searchField:''
    };
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response=>Response.json())
    .then(users=>this.setState({monsters:users}));
  }
  callfunc=(e)=>{
    this.setState({searchField:e.target.value});
  }


  render(){
     const {monsters,searchField}=this.state;
     const filteredmonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField));
     return (
      <div className="App">
      <h1>Monsters rolodex</h1>
      <SearchBox placeholder='Search Monsters' handlechange={this.callfunc}/>
      <CardList monsters={filteredmonsters}/>
      </div>
    );
  }
} 

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button onClick={}>This is sai</button>

//       </header>
//     </div>
//   );
// }



// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{this.state.string }</p>
//         <button onClick={() => this.setState({string:"Okay changed"})}>This is sai</button>

//       </header>
//     </div>