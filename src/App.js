//import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

//functional component
const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue] This only stores a single individual value (This is for searchField)
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users)=> setMonsters(users));

  }, []);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField])

  const onSearchChange = (event) => {
          const searchFieldString = event.target.value.toLocaleLowerCase();
          setSearchField(searchFieldString);
        }

  
  
  return(
    
    <div className="App">
      <h1 className='app-title'>Monster.inc Employees</h1>
      <SearchBox 
      onChangeHandler = {onSearchChange} 
      placeholder = 'Search Monsters' 
      className = 'monsters-search-box'
      />

    
    <CardList monsters={filteredMonsters}/>
  </div>
  );
};

//Class Component
// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField:''
//     };
//     console.log('1) Constructor');
//   }

//   componentDidMount(){
//     console.log('3) ComponentDidMount');
//    fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=> response.json())
//     .then((users)=> this.setState(()=>{
//       return {monsters: users}
//       },
//       () =>{
//         console.log(this.state)
//       }
//     ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
    
//     this.setState(() => {
//       return { searchField };
//     })
//   }

//   render() {
//     console.log('2) Render');

//     const { monsters, searchField} = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster.inc Employees</h1>
//         {/* <input 
//           className='search-box' 
//           type='search' 
//           placeholder='Search Monsters' 
//           onChange={onSearchChange}
//         /> */}
//         {/* {
//           filteredMonsters.map((monster) => {
//             return(
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//             );
//           })
//         } */}
//         <SearchBox 
//           onChangeHandler = {onSearchChange} 
//           placeholder = 'Search Monsters' 
//           className = 'monsters-search-box'
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );

//   }
// }

export default App;
