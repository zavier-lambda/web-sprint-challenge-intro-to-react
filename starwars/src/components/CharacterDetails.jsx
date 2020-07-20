import React from 'react';
// import styled from 'styled-components'

/*
Object
birth_year: "19BBY"
created: "2014-12-09T13:50:51.644000Z"
edited: "2014-12-20T21:17:56.891000Z"
eye_color: "blue"
films: (4) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/"]
gender: "male"
hair_color: "blond"
height: "172"
homeworld: "http://swapi.dev/api/planets/1/"
id: 0
mass: "77"
name: "Luke Skywalker"
skin_color: "fair"
species: []
starships: (2) ["http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/"]
url: "http://swapi.dev/api/people/1/"
vehicles: (2) ["http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/"]
*/

export default function Character({character}) {

    return(
        <div className="details">
            <div>Birth Year <br/><br/><span>{character['birth_year']}</span></div>            
            <div>Eye Color <br/><br/><span>{character['eye_color']}</span></div>            
            <div>Gender <br/><br/><span>{character['gender']}</span></div>            
            <div>Hair Color <br/><br/><span>{character['hair_color']}</span></div>            
            <div>Mass <br/><br/><span>{character['mass']}</span></div>            
        </div>
    )
}