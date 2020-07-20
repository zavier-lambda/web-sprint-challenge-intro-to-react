import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from "./components/Character";
import './App.css';

/* 
  films: "http://swapi.dev/api/films/"
  people: "http://swapi.dev/api/people/"
  planets: "http://swapi.dev/api/planets/"
  species: "http://swapi.dev/api/species/"
  starships: "http://swapi.dev/api/starships/"
  vehicles: "http://swapi.dev/api/vehicles/" 
*/

const App = () => {
  const [listOfCharacters, setlistOfCharacters] = useState([])
  let x = 0
useEffect(() => {
  axios.get('http://swapi.dev/api/people/')
  .then(res=>{
    console.log(res.data.results)
    setlistOfCharacters(res.data.results)
  })
  .catch(err=>{
    console.log(err)
  })
}, [])

  return (
    <div className="App">
      <img src={require("./images/logo.png")}></img><h1 className="Header">Characters</h1>
        {
          listOfCharacters.map( character => {
            character.id = x
            x++
            return <Character character={character} key={character.id}/>
          })
        }
      
    </div>
  );
}

export default App;
