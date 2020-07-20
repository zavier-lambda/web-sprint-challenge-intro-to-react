import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import CharacterDetails from "./CharacterDetails";
const Contain = styled.div`
    display: flex; 
    flex-wrap: wrap;
    width: 40%;
    justify-content: center;
    align-items: center;
    border: 4px solid green;
    background: black;
    margin: 1%;
    color: green;
    padding:1%;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;

    h2 {
        width: 90%;
        text-align: left;
        font-size: 12px;
    }

    .details{
        display: flex;
        width: 100%;
        justify-content: space-around;

        & div{
            width: 12%;
            font-size: 10px;
            margin-top: 1%;
            border: 2px solid green;
            padding: 1%;
        }
    }
    .button{
        background: none;
        border: none;
        outline: none;
        width: 1.5%;
        transform: rotate(180deg);
        &:hover{
            cursor: pointer;
            
        }
        &:target{
        
            
        }

    }

`

export default function Character({character}) {
    console.log(character);
    const [showDetails, setShowDetails]= useState(false)

    const toggleInfo = () => {
        setShowDetails(!showDetails)

    }
    return(
        <Contain>
            <h2>{character.name}</h2>
            <img className="button" src={require("./up.png")} alt="arrow up or down" onClick={()=>{toggleInfo()}}></img>
            {showDetails && <CharacterDetails character={character}/>}
            
        </Contain>
    )
}